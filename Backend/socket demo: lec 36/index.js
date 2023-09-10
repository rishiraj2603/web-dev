const express = require("express");
const app = express();
const path = require('path');
const http = require('http');
const server = new http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);


io.on('connection',(socket)=>{
    // console.log('connected')
})

app.use(express.static(path.join(__dirname, 'public')));


const PORT = 4444;
server.listen(PORT,()=>{
    console.log('server is running at port',PORT)
})