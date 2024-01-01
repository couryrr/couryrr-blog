package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

var gDb *sql.DB

func init() {
	log.Default().SetFlags(log.Llongfile)
	log.Default().Println("Init is auto called")
	db, err := sql.Open("sqlite3", "./couryrr-blog.db")
	if err != nil {
		log.Fatal("Database cannot init")
	}
	gDb = db
}

func corsEnabled(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")

}

type Post struct {
	Id         int       `json:"id"`
	Title      string    `json:"title"`
	Created_at time.Time `json:"created_at"`
	Updated_at time.Time `json:"updated_at"`
	Slug       string    `json:"slug"`
}

func main() {
	log.Default().Println("Starting server")
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusNotFound)
	})

	mux.HandleFunc("/posts", func(w http.ResponseWriter, r *http.Request) {
		log.Default().Println("Call to posts endpoint")
		if r.Method == http.MethodGet {
			log.Default().Println("GET call to posts endpoint")
			corsEnabled(w, r)
			rows, err := gDb.Query("SELECT * FROM post ORDER BY created_at LIMIT 10")

			if err != nil {
				log.Default().Printf("Database query failed with %e", err)
			}

			defer rows.Close()

			var posts []Post

			for rows.Next() { // Go version of while. We just use for everywhere...
				var post Post
				err := rows.Scan(&post.Id, &post.Title, &post.Created_at, &post.Updated_at, &post.Slug)

				if err != nil {
					log.Default().Println(err.Error())
				}

				posts = append(posts, post)
			}

			if err = rows.Err(); err != nil {
				log.Default().Println("Something failed while scanning", err.Error())
			}

			//send the list of posts
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(posts)
		} else {
			log.Default().Printf("%s sent for call to posts endpoint", http.StatusText(http.StatusMethodNotAllowed))
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})

	mux.HandleFunc("/post", func(w http.ResponseWriter, r *http.Request) {
		log.Default().Println("Creating a post entry")
		if r.Method == http.MethodPost {
			log.Default().Println("POST call to post endpoint")
			corsEnabled(w, r)
			_, err := gDb.Exec(`INSERT INTO post (title, created_at, updated_at, slug) VALUES('Test', ?, ?, 'test-this-app')`, time.Now(), time.Now())
			if err != nil {
				log.Default().Printf("Database query failed with %e", err)
			}
		} else {
			log.Default().Printf("%s sent for call to posts endpoint", http.StatusText(http.StatusMethodNotAllowed))
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})

	mux.HandleFunc("/dev/db", func(w http.ResponseWriter, r *http.Request) {
		log.Default().Printf("Creating database")
		ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()
		_, err := gDb.ExecContext(ctx, `DROP TABLE IF EXISTS post`)

		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			log.Fatalf(err.Error())
		}

		_, err = gDb.ExecContext(ctx, `CREATE TABLE IF NOT EXISTS post(id INTEGER PRIMARY KEY AUTOINCREMENT, 
			title varchar(255),
			created_at DATETIME,
			updated_at DATETIME,
			slug varchar(255)
			)`)

		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			log.Fatalf(err.Error())
		}

	})
	err := http.ListenAndServe(":8080", mux)

	log.Fatal(err)
}
