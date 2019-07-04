const express = require('express')
const fs = require('fs')
const route = express.Router()

let tasks = []
function updateTodos () {
    let path = __dirname.split('/')
    path.pop()
    path = path.join('/')
    fs.writeFile(path+'/todos/tasks.txt',
    JSON.stringify(tasks),
    (err) => {console.log(err)}
    )
}
function fetchTodos () {
    let path = __dirname.split('/')
    path.pop()
    path = path.join('/')
    fs.readFile(path+'/todos/tasks.txt',
    (err,data) => {
        if(err) console.log(err)
        tasks = ((data.toString() == '')?[]:JSON.parse(data.toString()))
    }
    )
}
fetchTodos()
route.get('/',(req,res) => res.send(tasks))
route.post('/',(req,res) => {
    tasks.push(req.body.task)
    updateTodos()
    res.redirect(req.originalUrl)
})

module.exports = route