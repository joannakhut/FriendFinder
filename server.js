// require packages
var express = require ("express");
var path = require ("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("./FriendFinder/app/routing/apiRoutes")(app);
require("./FriendFinder/app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});