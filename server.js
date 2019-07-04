const express = require('express')
const server = express()

const PORT = process.env.PORT || 2323

const tasks_route = require('./routes/tasks')

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use('/tasks',tasks_route)

server.use('/',express.static(__dirname + '/public_static'))
server.listen(PORT,console.log(`Server started at http://localhost:${PORT}`))