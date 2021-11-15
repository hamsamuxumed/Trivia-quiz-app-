const express = require('express');
const socket = require('socket.io');
const app = express();
const cors = require('cors')
const axios = require('axios')

app.use(cors())
app.use(express.json())

const server = app.listen('3000', () => {
    console.log('server running on https://localhost:3000')
})



const io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id)

    
    socket.on('join_room', (data) => {
        socket.join(data);
        console.log('user is in room: ' + data)
    })
    
    socket.on('username', (data) => {
        console.log('username is' + data)
    })
    
    socket.on('track_score', (data) => {
        console.log('your score is ' + data)
    })
    
    socket.on('start_game', (data) => {
        console.log('data in start game ' + data)
        async function apiCall(){
            try {
                const trivia = await axios.get('https://opentdb.com/api.php?amount=10');
                console.log(trivia.data.results)
                const result = (trivia.data.results)
                io.in(data).emit('receive_q', result)
            } catch (err) {
                console.log(err)
            }
        }
        apiCall()
    })


    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})
