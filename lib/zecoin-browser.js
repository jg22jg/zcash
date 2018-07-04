/*!
 * zecoin.js - a javascript zcash library.
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License).
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License)
 * Copyright (c) 2017-2018, Jonathan Gonzalez (MIT License).
 * https://github.com/master-org/zecoin
 */

'use strict';

/**
 * A zecoin "environment" which exposes all
 * constructors for primitives, the blockchain,
 * mempool, wallet, etc. It also exposes a
 * global worker pool.
 *
 * @exports zcash
 * @type {Object}
 */

const zcash = exports;

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
zcash.blockchain = require('./blockchain');
zcash.Chain = require('./blockchain/chain');
zcash.ChainEntry = require('./blockchain/chainentry');

// ZEC
zcash.btc = require('./btc');
zcash.Amount = require('./btc/amount');
zcash.URI = require('./btc/uri');

// Coins
zcash.coins = require('./coins');
zcash.Coins = require('./coins/coins');
zcash.CoinEntry = require('./coins/coinentry');
zcash.CoinView = require('./coins/coinview');

// HD
zcash.hd = require('./hd');
zcash.HDPrivateKey = require('./hd/private');
zcash.HDPublicKey = require('./hd/public');
zcash.Mnemonic = require('./hd/mnemonic');

// Mempool
zcash.mempool = require('./mempool');
zcash.Fees = require('./mempool/fees');
zcash.Mempool = require('./mempool/mempool');
zcash.MempoolEntry = require('./mempool/mempoolentry');

// Miner
zcash.mining = require('./mining');
zcash.Miner = require('./mining/miner');

// Net
zcash.net = require('./net');
zcash.packets = require('./net/packets');
zcash.Peer = require('./net/peer');
zcash.Pool = require('./net/pool');

// Node
zcash.node = require('./node');
zcash.Node = require('./node/node');
zcash.FullNode = require('./node/fullnode');
zcash.SPVNode = require('./node/spvnode');

// Primitives
zcash.primitives = require('./primitives');
zcash.Address = require('./primitives/address');
zcash.Block = require('./primitives/block');
zcash.Coin = require('./primitives/coin');
zcash.Headers = require('./primitives/headers');
zcash.Input = require('./primitives/input');
zcash.InvItem = require('./primitives/invitem');
zcash.KeyRing = require('./primitives/keyring');
zcash.MerkleBlock = require('./primitives/merkleblock');
zcash.MTX = require('./primitives/mtx');
zcash.Outpoint = require('./primitives/outpoint');
zcash.Output = require('./primitives/output');
zcash.TX = require('./primitives/tx');

// Protocol
zcash.protocol = require('./protocol');
zcash.consensus = require('./protocol/consensus');
zcash.Network = require('./protocol/network');
zcash.networks = require('./protocol/networks');
zcash.policy = require('./protocol/policy');

// Script
zcash.script = require('./script');
zcash.Opcode = require('./script/opcode');
zcash.Program = require('./script/program');
zcash.Script = require('./script/script');
zcash.ScriptNum = require('./script/scriptnum');
zcash.SigCache = require('./script/sigcache');
zcash.Stack = require('./script/stack');

// Utils
zcash.utils = require('./utils');
zcash.util = require('./utils/util');

// Wallet
zcash.wallet = require('./wallet');
zcash.WalletDB = require('./wallet/walletdb');

// Workers
zcash.workers = require('./workers');
zcash.WorkerPool = require('./workers/workerpool');

// Package Info
zcash.pkg = require('./pkg');
