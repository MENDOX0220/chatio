const express = require('express')
const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http)

app.use(express.static("public"))
app.use(express.static("node_modules"))

app.get('/',(req, res)=>{
    res.sendFile("./public/index.html")
})

io.on('connection', socket =>{
    socket.on("sendServer", data=> {
        io.sockets.emit("sendClient", data)
    })
})

http.listen(3000)