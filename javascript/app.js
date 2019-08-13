var http = require("http");
var fs = require("fs")

var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;



function handleRequest(req, res) {

    var path = req.url;

    switch (path) {
        case "/":
            return fs.readFile(__dirname + "/index.html", function (err, data) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" })
                res.end(data);
            });
        case "/table":
            return fs.readFile(__dirname + "/table.html", function (err, data) {

                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" })
                res.end(data);


            });

        case "/reservation":
            return fs.readFile(__dirname + "/reservation.html", function (err, res) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" })
                res.end(data);


            });

        default:
            return fs.readFile(__dirname + "/index.html", function (err, data) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

    }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {



    console.log("Listening to server on: http://localhost:" + PORT);
})