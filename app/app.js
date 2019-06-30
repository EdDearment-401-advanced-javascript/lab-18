'use strict';

const alter = require('../src/alterfile');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3001');

const alterFile = (file) => {
  alter.readFile(file)
    .then(data => {
      alter.writeFile(file, alter.toUpp(data));
      socket.emit('file-save', file);
    })
    .catch(err => socket.emit('file-error'), 500);
};


// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };

let file = process.argv.slice(2).shift();
alterFile(file);
