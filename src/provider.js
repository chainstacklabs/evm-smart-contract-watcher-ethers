const ethers = require('ethers');
require('dotenv').config();

const node_url = process.env.ERIGON_RPC
const provider = new ethers.providers.JsonRpcProvider(node_url);

module.exports = provider;