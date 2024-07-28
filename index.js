const express = require("express")
const {Server} = require("socket.io")
const http = require("http")
const app = express();

const server = http.createServer(app);

const io = new Server(server)
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

io.on('connection', (socket)=>{
    console.log("user connected")
    socket.on('on-chat', data=>{
        console.log(data)
        io.emit('user-chat',data)
    })
})

server.listen(8000, (req, res)=>{
    console.log("server is running")
})
