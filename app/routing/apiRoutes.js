// LOAD DATA
var friendList = require("../data/friends");


// ROUTING -- incomplete
module.exports = function(app) {

// GET 
    app.get("/api/friends"), function(req, res) {
        res.json(friendList);
    };

// POST -- incomplete
app.post("/api/friends", function (req,res) {
// enter if / else statement???
});

    
}