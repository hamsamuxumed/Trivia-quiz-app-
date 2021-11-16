const db = require('../dbConfig/init')

class Leaderboard {
    constructor(data) {
        this.id = data.id
        this.username = data.username
        this.score = data.score
        this.room = data.room
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM Leaderboard;')
                const leaderboard = result.rows.map(l => new Leaderboard(l))
                resolve(leaderboard)
            } catch (err) {
                reject(`Error retrieving Leaderboard ${err}`)

            }
        })
    }
    static create(userData) {
        return new Promise(async (res, rej) => {
            try {
                let insertQuery = await db.query(`INSERT INTO Leaderboard (username, score, room) VALUES ($1,$2,$3) RETURNING *;`, [userData[0], userData[1], userData[2]])
                let user = new Leaderboard(insertQuery.rows[0])
                res(user)
            } catch (err) {
                re(`failed to create user ${err}`)
            }
        })
    }

    static update(score, username) {
        return new Promise(async (res, rej) => {
            try {
                let updateQuery = await db.query(`UPDATE Leaderboard SET score = $1 WHERE username = $2 RETURNING *;`, [score, username])
                let updateUser = new Leaderboard(updateQuery.rows[0])
                res(updateUser)

            } catch (err) {
                rej(`failed to update ${err}`)
            }
        })
    }

}
module.exports = Leaderboard