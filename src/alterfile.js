'use strict';

const fs = require('fs');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
/**
 * 
 * @param {the file it self} file
 * @desc It uses the FS module to read a file 
 */
function readFS(file){
  fs.readFile(file,(error,data) => {
    if(error){

    } else {

    }
  });
}

/**
 * 
 * @param {contents of a file} data 
 * @desc It takes the contents of the file and turns it to upper case
 */

function toUpp(data){
  data = Buffer.from(data);
  return data.toString().toUpperCase();
}


/**
 * 
 * @param {*} file
 * @desc after the to uppercase function runs this writes the new data to the file 
 */
function writeFS(file){
  fs.writeFile(file, text, (error) => {
    if(error){

    }else{

    }
  });
}
module.exports = {readFS,toUpp,writeFS};