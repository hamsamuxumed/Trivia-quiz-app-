const express = require('express');
const app = express();
const cors = require('cors')
const axios = require('axios')
const leaderboardRoutes = require('./routes/leaderboard');
const Leaderboard = require('./models/Leaderboard')

const socket = require('socket.io');

app.use(cors())
app.use(express.json())
app.use('/leaderboard', leaderboardRoutes);

// connect routes to server.js
const server = app.listen('3000', () => {
    console.log('server running on http://localhost:3000')
});

app.get('/', (req, res) => res.send("Welcome to the API"));

io = socket(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});



io.on('connection', (socket) => {



    socket.on('join_room', (data) => {
        socket.join(data);
        console.log('user is in room: ' + data)
        // cb(`Joined room: ${data}`)
    })

    socket.on('username', (data) => {
        console.log(socket.id)
        console.log('username is' + data)

    })

    socket.on('endgame', (data) => {
        io.in(data).emit('receive_room_leaderboard', Leaderboard.getRoomLeaderboard(data))
        console.log(Leaderboard.getRoomLeaderboard(data))

    })

    socket.on('track_score', (data) => {
        console.log('your score is ' + data)
        async function updateScore() {
            try {
                await Leaderboard.update(data[0], socket.id);

            } catch (err) {
                console.log(err)
            }

        }
        updateScore();
    })

    socket.on('start_game', (data) => {
        console.log('data in start game ' + data)
        async function apiCall() {
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
    socket.on('all_data', (data) => {
        console.log(data)
        async function createUser() {
            try {
                await Leaderboard.create(data, socket.id)

            } catch (err) {
                console.log(err)
            }
        }
        createUser();
    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})
