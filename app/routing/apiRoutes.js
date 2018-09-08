let path = require("path");

let friends = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })

    app.post('/api/friends', function (req, res) {
        // grabs the user's input from the survey
        let user = req.body;

        // takes the user's scores from each question
        let userScore = user.scores;

        // variables used to hold match's name and image
        let matchName = '';
        let matchPic = '';

        // setting initial value high for the comparison
        let friendDif = 10000;

        // for loop that goes through all friends on friends.js
        for (let i = 0; i < friends.length; i++) {

            // sets initial difference to 0
            let difference = 0;

            // for loop that compares the difference between the user and friends list scores
            for (let j = 0; j < userScore.length; j++) {
                difference += Math.abs(friends[i].scores[j] - userScore[j])
            }

            // whichever friend has the lowest difference will become the match
            if (difference < friendDif) {

                friendDif = difference;
                matchName = friends[i].name;
                matchPic = friends[i].photo;
            }
        }

        // pushes user's input to the friendslist
        friends.push(user);

        // returns the appropriate data for the modal on the survey 
        res.json({ status: 'OK', matchName: matchName, matchPic: matchPic });
        
    })
}