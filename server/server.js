'use strict';

const io = require('socket.io')(3000);

io.on('connection', socket => {
	console.log(`Connected to socket: ${socket}`)
	socket.on('file-save', payload => {
		//old socket.broadcast.emit('message', payload);
		io.emit('message', payload);
  });
  
  socket.on('file-error', payload => {
    io.emit('message', payload);
  });
});