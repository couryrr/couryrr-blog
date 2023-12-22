package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Test")
		w.WriteHeader(http.StatusBadRequest)
	})

	err := http.ListenAndServe(":8080", mux)

	log.Fatal(err)
}
