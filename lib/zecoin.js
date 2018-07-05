/*!
 * zecoin.js - a javascript zcash library.
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License).
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License)
 * Copyright (c) 2017-2018, Jonathan Gonzalez (MIT License).
 * https://github.com/master-org/zecoin
 */

/* eslint prefer-arrow-callback: "off" */

'use strict';

/**
 * A zcash "environment" which exposes all
 * constructors for primitives, the blockchain,
 * mempool, wallet, etc. It also exposes a
 * global worker pool.
 *
 * @exports zcash
 * @type {Object}
 */

const zcash = exports;

/**
 * Define a module for lazy loading.
 * @param {String} name
 * @param {String} path
 */

zcash.define = function define(name, path) {
  let cache = null;
  Object.defineProperty(zcash, name, {
    get() {
      if (!cache)
        cache = require(path);
      return cache;
    }
  });
};

/**
 * Set the default network.
 * @param {String} network
 */

zcash.set = function set(network) {
  zcash.Network.set(network);
  return zcash;
};

/*
 * Expose
 */

// Blockchain
zcash.define('blockchain', './blockchain');
zcash.define('Chain', './blockchain/chain');
zcash.define('ChainEntry', './blockchain/chainentry');

// ZEC
zcash.define('btc', './btc');
zcash.define('Amount', './btc/amount');
zcash.define('URI', './btc/uri');

// Coins
zcash.define('coins', './coins');
zcash.define('Coins', './coins/coins');
zcash.define('CoinEntry', './coins/coinentry');
zcash.define('CoinView', './coins/coinview');

// HD
zcash.define('hd', './hd');
zcash.define('HDPrivateKey', './hd/private');
zcash.define('HDPublicKey', './hd/public');
zcash.define('Mnemonic', './hd/mnemonic');

// Mempool
zcash.define('mempool', './mempool');
zcash.define('Fees', './mempool/fees');
zcash.define('Mempool', './mempool/mempool');
zcash.define('MempoolEntry', './mempool/mempoolentry');

// Miner
zcash.define('mining', './mining');
zcash.define('Miner', './mining/miner');

// Net
zcash.define('net', './net');
zcash.define('packets', './net/packets');
zcash.define('Peer', './net/peer');
zcash.define('Pool', './net/pool');

// Node
zcash.define('node', './node');
zcash.define('Node', './node/node');
zcash.define('FullNode', './node/fullnode');
zcash.define('SPVNode', './node/spvnode');

// Primitives
zcash.define('primitives', './primitives');
zcash.define('Address', './primitives/address');
zcash.define('Block', './primitives/block');
zcash.define('Coin', './primitives/coin');
zcash.define('Headers', './primitives/headers');
zcash.define('Input', './primitives/input');
zcash.define('InvItem', './primitives/invitem');
zcash.define('KeyRing', './primitives/keyring');
zcash.define('MerkleBlock', './primitives/merkleblock');
zcash.define('MTX', './primitives/mtx');
zcash.define('Outpoint', './primitives/outpoint');
zcash.define('Output', './primitives/output');
zcash.define('TX', './primitives/tx');

// Protocol
zcash.define('protocol', './protocol');
zcash.define('consensus', './protocol/consensus');
zcash.define('Network', './protocol/network');
zcash.define('networks', './protocol/networks');
zcash.define('policy', './protocol/policy');

// Script
zcash.define('script', './script');
zcash.define('Opcode', './script/opcode');
zcash.define('Program', './script/program');
zcash.define('Script', './script/script');
zcash.define('ScriptNum', './script/scriptnum');
zcash.define('SigCache', './script/sigcache');
zcash.define('Stack', './script/stack');

// Utils
zcash.define('utils', './utils');
zcash.define('util', './utils/util');

// Wallet
zcash.define('wallet', './wallet');
zcash.define('Path', './wallet/path');
zcash.define('WalletKey', './wallet/walletkey');
zcash.define('WalletDB', './wallet/walletdb');

// Workers
zcash.define('workers', './workers');
zcash.define('WorkerPool', './workers/workerpool');

// Package Info
zcash.define('pkg', './pkg');
