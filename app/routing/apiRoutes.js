var temp = require("../data/friends");
var friendList = temp.friendlist;
var friendScore = 0;
var bestFriend = 0;
var tempBestFriend = 10000000;

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friendList);
    });
    app.post("/api/friends", function(req, res) {
        var newUser = req.body;
        var newUserScore = newUser.scores;
        for (i = 0; i < friendList.length; i++){
            for (j = 0; j < 10; j++){
                friendScore = Math.abs(friendList[i].scores[j] - newUserScore[j]) + friendScore;
            }
            if(friendScore < tempBestFriend){
                bestFriend = i;
                tempBestFriend = friendScore;
            }
            friendScore = 0;
        }
        res.json(friendList[bestFriend].name);
    });
}