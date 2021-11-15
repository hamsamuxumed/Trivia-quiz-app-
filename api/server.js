const express = require('express');
const socket = require('socket.io');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())

const server = app.listen('3002', () => {
    console.log('server running on https://localhost:3000')
})

const io = socket(server, {  
    cors: {    
        origin: '*',    
        methods: ["GET", "POST"],    
        allowedHeaders: ["my-custom-header"],    
        credentials: true  
    }});

io.on('connection', (socket) => {
    console.log(socket.id)

    socket.on('join_room', (data) => {
        socket.join(data);
        console.log('user is in room: ' + data)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})
