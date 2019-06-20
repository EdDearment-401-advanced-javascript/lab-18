'use strict';

const fs = require('fs');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

const alter = require('../src/alterfile');

const alterFile = (file) => {
  alter.readFS(file)
    .then(data => {
      data = alter.toUpp(data);
      alter.writFS(file, data);
    })
    .then (() => socket.emit('file-save', file) && socket.disconnect(true), 500)
    .catch(err => socket.emit('file-error'), 500);
}


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
