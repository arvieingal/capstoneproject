const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const nodemon = require('cors')
const bodyParser = require('body-parser')
const port = 8080

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//to enable web servers to serve resources to clients on different origins, for cross-origin requests, security and flexibility
app.get('/', (req, res) => {
    return res.json("backend side")
})

//to run on the server
app.listen(port, () => {
    console.log("running at port " + port)
})

//to connect to the database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
})

//for displaying data/record (to be modify soon)
app.get('/users', (req, res) => {
    const sql = "SELECT * FROM table_name"
    db.query(sql, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//for deleting record/data (to be modify soon)
app.delete('/:id', (req, res) => {
    const sql = "SELECT * FROM table_name"
    db.query(sql, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//for adding record/data (to be modify soon)
app.post('', (req, res) => {
    const sql = "SELECT * FROM table_name"
    db.query(sql, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//for updating record/data (to be modify soon)
app.delete('', (req, res) => {
    const sql = "SELECT * FROM table_name"
    db.query(sql, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})