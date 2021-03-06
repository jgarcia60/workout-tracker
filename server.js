const express = require('express');
// const mongojs = require('mongojs');
const mongoose = require('mongoose');
const Workout = require('./controllers/workoutController.js');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//routes
app.use(Workout);
require('./controllers/viewController')(app);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});