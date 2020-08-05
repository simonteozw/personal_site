package middleware

import (
	"database/sql"
	"encoding/json"
	"net/http"

	"../models"
	_ "github.com/go-sql-driver/mysql"
)

func dbConn() (db *sql.DB) {
    dbDriver := "mysql"
    dbUser := "root"
    dbPass := ""
    dbName := "blog"
    db, err := sql.Open(dbDriver, dbUser+":"+dbPass+"@/"+dbName)
    if err != nil {
        panic(err.Error())
    }
    return db
}

func Index(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	payload := getAllPosts()
	json.NewEncoder(w).Encode(payload)
}

func getAllPosts() []models.Post {
	db := dbConn()
	selDB, err := db.Query("SELECT * FROM Posts ORDER BY updated_at DESC")
    if err != nil {
        panic(err.Error())
	}
	post := models.Post{}
	res := []models.Post{}
	for selDB.Next() {
        var id, userId, views int
        var title, slug, body string
        err = selDB.Scan(&id, &userId, &views, &title, &slug, &body)
        if err != nil {
            panic(err.Error())
        }
		post.Id = id
		post.UserId = userId
		post.Title = title
		post.Slug = slug
		post.Views = views
		post.Body = body
        res = append(res, post)
	}
	return res
}