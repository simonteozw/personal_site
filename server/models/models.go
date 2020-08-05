package models

import (
	_ "github.com/go-sql-driver/mysql"
)

type Post struct {
	Id int
	UserId int
	Title string
	Slug string
	Views int
	Body string
}