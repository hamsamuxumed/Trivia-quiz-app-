const express = require('express');
const app = express();
const cors = require('cors')

const socket = require('socket.io');

app.use(cors())
app.use(express.json())

const server = app.listen('3000', () => {
    console.log('server running on https://localhost:3000')
})

io = socket(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log(socket.id)

    socket.on('join_room', (data) => {
        socket.join(data);
        console.log('user is in room: ' + data)
    })

    socket.on('username', (data) => {
        console.log('username is' + data)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})
