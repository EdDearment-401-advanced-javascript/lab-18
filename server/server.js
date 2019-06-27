'use strict';

const io = require('socket.io')(3001);

io.on('connection', function(socket){
  console.log(`Message for you sir: ${socket.id}`);
  socket.on('message', payload => {
    let d = new Date();
    console.log(d.getMonth()+ '/' + d.getDay()+ '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() );
    console.log( `The message is:${payload}`);
  });
});

// io.on('connection', function (socket) {
//   socket.on('message', function () { });
//   socket.on('disconnect', function () { });
// });

// io.on('connection', socket => {
//   console.log(`Connected to socket: ${socket}`);
//   socket.on('file-save', payload => {
//     io.emit('file-save', payload);
//   });


  
//   socket.on('file-error', payload => {
//     io.emit('file-error', payload);
//   });
// });