'use strict';
const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);

class DatabaseError extends Error {
  constructor(message, stack, sql) {
    super();
    this.name = 'SequelizeDatabaseError';
    this.message = message;
    this.stack = stack;
    this.sql = sql;
  }
}

class MemoryController extends Controller {
  async oom() {
    const { ctx } = this;
    let bigErrorMessage = await readFile(path.join(__dirname, 'resource/error.txt'));
    bigErrorMessage = bigErrorMessage.toString();
    const error = new DatabaseError(bigErrorMessage, bigErrorMessage, bigErrorMessage);
    ctx.logger.error(error);
    ctx.body = { ok: false };
  }
}

module.exports = MemoryController;