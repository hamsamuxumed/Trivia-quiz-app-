const db = require('../dbConfig/init')

class Leaderboard {
    constructor(data) {
        this.id = data.id
        this.username = data.username
        this.score = data.score
        this.room = data.room
        this.socket_id = data.socket_id
    }

    static get all() {
        return new Promise(async (res, rej) => {
            try {
                const result = await db.query('SELECT * FROM Leaderboard;')
                const leaderboard = result.rows.map(l => new Leaderboard(l))
                res(leaderboard)
            } catch (err) {
                rej(`Error retrieving Leaderboard ${err}`)

            }
        })
    }
    static create(userData, socket_id) {
        return new Promise(async (res, rej) => {
            try {
                let insertQuery = await db.query(`INSERT INTO Leaderboard (username, score, room, socket_id) VALUES ($1,$2,$3,$4) RETURNING *;`, [userData[0], userData[1], userData[2], socket_id])
                let user = new Leaderboard(insertQuery.rows[0])
                res(user)
            } catch (err) {
                rej(`failed to create user ${err}`)
            }
        })
    }

    static update(score, socket_id) {
        return new Promise(async (res, rej) => {
            try {
                let updateQuery = await db.query(`UPDATE Leaderboard SET score = $1 WHERE socket_id = $2 RETURNING *;`, [score, socket_id])
                let updateUser = new Leaderboard(updateQuery.rows[0])
                res(updateUser)

            } catch (err) {
                rej(`failed to update ${err}`)
            }
        })
    }

    static getRoomLeaderboard(room) {
        return new Promise(async (res, rej) => {
            try {
                let roomQuery = await db.query(`SELECT *  FROM Leaderboard WHERE room = $1;`, [room])
                let roomLeaderboard = roomQuery.rows.map(r => new Leaderboard(r))
                res(roomLeaderboard)
            } catch (err) {
                rej(`Failed to get room leaderboard- ${err}`)
            }
        })
    }



}
module.exports = Leaderboard