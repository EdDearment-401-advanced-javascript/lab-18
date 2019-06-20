'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3001');

/**
 * @param {} payload
 * @desc console logs the payload that has been saved 
 */
let saveLog = payload => {
  console.log('Saved:', payload);
};

/**
 * @desc console logs an error message
 */
let errorLog = () => {
  console.error('That boy aint right');
};

socket.on('file-save', saveLog);
socket.on('file-error', errorLog);

module.exports = {saveLog, errorLog};