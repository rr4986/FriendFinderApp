// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var amigos = require("../data/friends");
var submitterScore = 0;
var usersScores = [];

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(amigos);
  });



  app.post("/api/friends", function(req, res) {

      //calculate the submitters score in the post request
      for(var i=0; i<req.body.scores.length;i++){
          submitterScore += req.body.scores[i];
      };

      //push the submitters information to the friendList array in friends.js
      amigos.push(req.body);

      //calculate the score of the participants already in friend.js 
      for(var i=0; i<res.length-1; i++){
        for(var j=0; j<res[1].scores.length;j++){
            answerScore[i] += res[i].scores[j];
        }
        
      }

  });
};
