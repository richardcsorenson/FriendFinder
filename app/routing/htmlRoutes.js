var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/:userEntry", function(req, res) {
        var userEntry = req.params.userEntry;
        if (userEntry === "survey"){
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        }
        else{
            res.sendFile(path.join(__dirname, "../public/home.html"));
        }
    });
}