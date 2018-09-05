let path = require("path");

let friends = require('../data/friends.js');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    })

    app.post('/api/friends', function(req, res) {
        let surveyInput = req.body;

        let userScore = surveyInput.scores;

        let matchName = '';
        let matchPic = '';
        let friendDif = 1000;

        for (let i = 0; i < friends.length; i++) {

            let difference = 0;

            for (let j = 0; j < userScore.length; j++) {
                difference += Math.abs(friends[i].scores[j] - userScores[j])
            }

            if (difference < friendDif) {

                friendDif = difference;
                matchName = friends[i].name;
                matchPic = friends[i].photo;
            }
        }

        friends.push(surveyInput);
    })
}