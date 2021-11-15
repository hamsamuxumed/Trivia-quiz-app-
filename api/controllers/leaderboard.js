const Leaderboard = require('../models/Leaderboard')

async function index(req, res) {
    try {
        const leaderboard = await Leaderboard.all;
        res.status(200).json(leaderboard)
    } catch (err) {
        res.status(500).json({ err })
    }

}


module.exports = { index }