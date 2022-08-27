const express = require("express");
const { createServer } = require("http");
const PORT = process.env.PORT || 3000;

const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);


app.get('/beacons', (req, res) => {
    console.log(' I am beacons');
});


const io = new Server(httpServer, { cors: {origin: "http://localhost:8080" }});
io.on("connection", (socket) => {
    console.log('I am on connection');
});

httpServer.listen(PORT);