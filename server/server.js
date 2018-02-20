const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
//const bodyParser = require('body-parser');
const path = require('path');
const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

io.on('connection', (socket) => {
   console.log('New user connected');
     socket.on('disconnect', () => {
      console.log('User disconnected');
     });
   

   socket.on('createEmail', (newEmail) => {
     console.log('Email created', newEmail);
   });

   socket.on('disconnect', () => {
      console.log('Disconnected to server');
   });
});




server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
