package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
    _ "github.com/mattn/go-sqlite3")

var db *sql.DB

func main() {
	var err error
	db, err = sql.Open("sqlite3", "bdd.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	http.HandleFunc("/", nameHandler)
	fmt.Println("Server listening on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func nameHandler(w http.ResponseWriter, r *http.Request) {
	var name string
	err := db.QueryRow("SELECT name FROM user").Scan(&name)
	if err != nil { 
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	fmt.Fprintf(w, "name return from database: %s", name)
}
