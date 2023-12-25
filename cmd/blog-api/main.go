package main

import (
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodOptions {
			w.Header().Add("Access-Control-Allow-Origin", "*")
			w.Header().Add("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
			w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		}
	})

	mux.HandleFunc("/post/slug", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Access-Control-Allow-Origin", "*")
		w.Header().Add("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")

		if r.Method == http.MethodGet {
			//Look up the blog slug
			text := "#Just a header"
			//send the markdown
			w.Write([]byte(text))
		} else {
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})

	err := http.ListenAndServe(":8080", mux)

	log.Fatal(err)
}
