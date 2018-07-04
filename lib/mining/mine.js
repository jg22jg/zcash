/*!
 * mine.js - mining function for zecoin
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License)
 * Copyright (c) 2017-2018, Rojikku (MIT License).
 * https://github.com/master-org/zcash
 */

'use strict';

const assert = require('assert');
const blake2b = require('bcrypto/lib/blake2b');

/**
 * Hash until the nonce overflows.
 * @alias module:mining.mine
 * @param {Buffer} data
 * @param {Buffer} target - Big endian.
 * @param {Number} min
 * @param {Number} max
 * @returns {Number} Nonce or -1.
 */

function mine(data, target, min, max) {
  let nonce = min;

  data.writeUInt32LE(nonce, 136, true);

  // The heart and soul of the miner: match the target.
  while (nonce <= max) {
    // Hash and test against the next target.
    if (rcmp(blake2b.digest(data), target) <= 0)
      return nonce;

    // Increment the nonce to get a different hash.
    nonce += 1;

    // Update the raw buffer.
    data.writeUInt32LE(nonce, 136, true);
  }

  return -1;
}

/**
 * "Reverse" comparison so we don't have
 * to waste time reversing the block hash.
 * @ignore
 * @param {Buffer} a
 * @param {Buffer} b
 * @returns {Number}
 */

function rcmp(a, b) {
  assert(a.length === b.length);

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] < b[i])
      return -1;
    if (a[i] > b[i])
      return 1;
  }

  return 0;
}

/*
 * Expose
 */

module.exports = mine;
