'use strict';

let alter = require('../src/alterfile');

jest.mock('fs');

describe('File reader', () => {
  it('should read a txt file', () => {
    let file = 'test.txt';
    return alter.readFile(file)
      .then(data => {
        expect(data).toBeDefined();
      });
  });
});

describe('Upper case', () => {
  it('should take in text data and make it upper case', () => {
    let text = 'Didoneofthemsnipehunts';
    let up = alter.toUpp(text);
    expect(up).toBe('DIDONEOFTHEMSNIPEHUNTS');
  });
});

//Need to get spy working
// describe ('file writer', () => {
//   it('should write to a txt file', () => {
//     let file = 'test.txt';
//     let text = 'Did one of them snipe hunts';

//     return alter.writeFile(file,text)
//     .then(data =>  {
//       expect(alter.writeFile).toBeCalled()
//     });
//   });
// });