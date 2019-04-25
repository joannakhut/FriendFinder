var path = require("path");

// GET ROUTES
module.exports = function(app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

// home default if no route found
app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

};