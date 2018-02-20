var socket = io();
socket.on('connect', function () {
   console.log('Connected to server');
   socket.emit('createEmail', {
     to: 'bob@bsbb.com',
     text: 'Order request for custom gear'
   })
});

socket.on('disconnect', function () {
   console.log('Disconnected to server');
});

socket.on('newEmail', function (email) {
   console.log('New email', email);
});
