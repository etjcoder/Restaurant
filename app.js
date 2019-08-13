var http = require("http");
var fs = require("fs");

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var reservationsArray = [
];

var waitListArray = [
];

$("#button-1").on("click", function () {
    console.log("I've been clicked")
})

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
// app.use(express.static('public/style.css'))
app.use(express.json());

app.get("/", ((req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
    // res.render("/style.css")
}));

app.get("/table", ((req, res) => {
    res.sendFile(path.join(__dirname + "/table.html"));
}))

app.get("/make", ((req, res) => {
    res.sendFile(path.join(__dirname + "/make.html"));
}))

app.get("/api/table", ((req, res) => {

    return res.json(reservationsArray);
}))

app.get("/api/reservations", ((req, res) => {
    return res.json(reservationsArray);
}))

app.get("/api/waitlist", ((req, res) => {
    return res.json(waitListArray);
}))


app.post("/api/table", function (req, res) {
    var newReservation = req.body;
    console.log(newReservation);
    if (reservationsArray.length < 5) {
        reservationsArray.push(newReservation);
        res.json(newReservation);
    } else {
        waitListArray.push(newReservation);
        res.json(newReservation);
    }
})

app.listen(PORT, function () {

    console.log("Listening to server on: http://localhost:" + PORT);
})

console.log("App is here!");