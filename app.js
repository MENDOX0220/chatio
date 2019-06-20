const express = require('express')
const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http)

// var nicknames =[];

app.use(express.static("public"))
app.use(express.static("node_modules"))

app.get('/',(req, res)=>{
    res.sendFile("./public/index.html")
})

io.on('connection', socket =>{
    // socket.on("new user", function(data, callback){
    //     if (nicknames.indexOf(data) != -1){
    //         callback(false);
    //     }
    //     else {
    //         callback(true);
    //         socket.nicknames = data;
    //         nicknames.push(socket.nickname);
    //         io.sockets.emit("usernames", nicknames);
    //     }
    // })
    socket.on("sendServer", data=> {
        io.sockets.emit("sendClient", data)
    })
})

http.listen(3000)