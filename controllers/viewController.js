const path = require("path");

module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
    // Route to the excercise page
    app.get("/exercise", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
  
    // stats route loads stats.html
    app.get("/stats", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    // workout route loads workout.html
    app.get("/workout", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/workout.html"));
      });
  
  };