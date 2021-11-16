const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboard');


router.get('/users', leaderboardController.index)

module.exports = router;