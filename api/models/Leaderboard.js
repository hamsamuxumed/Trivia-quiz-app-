const db = require('../dbConfig/init')

class Leaderboard {
    constructor(data) {
        this.id = data.id
        this.username = data.username
        this.score = data.score
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
}
module.exports = Leaderboard