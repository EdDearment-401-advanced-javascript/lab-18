'use strict';

const loggers = require('../logger/logger');

describe('Loggers', () => {
  describe('saveLog', () => {
    it('should run console log once when saved', () => {
      let logSpy = jest.spyOn(console, 'log');

      loggers.saveLog('file-save');

      expect(logSpy).toHaveBeenCalledTimes(1);
      logSpy.mockRestore();
    });
  });

  describe('errorLog', () => {
    it('should run console error once when an error is encountered', () => {

      let errorSpy = jest.spyOn(console, 'error');

      loggers.errorLog('file-error');

      expect(errorSpy).toHaveBeenCalledTimes(1);
      errorSpy.mockRestore();
    });
  });
});