const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();
const port = 3000;

const user = require('./routes/users');

const expense = require('./routes/expenses');

mongoose.connect('mongodb://admin:admin@ds053877.mlab.com:53877/expensetracker');

var db = mongoose.connection;

db.on('connected', () => {
    console.log("connected to db");
});

db.on('err', (err) => {
    console.log(err);
});

//CORS Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//bodyParser Middleware
app.use(bodyParser.json());

//for all user routes
app.use('/users', user);

//for all expense routes
app.use('/expenses', expense);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./passport')(passport);

//Index Route
app.get('/', (req, res) => {
    res.send("home page")
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(process.env.PORT || port, () => {
    console.log("connected to port " + port);
})