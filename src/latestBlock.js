/**
 * This script exports a function that retrieves the latest block number
 * Then we export an object that contains the toHex latestBlock.
 */

const ethers = require('ethers');
require('dotenv').config();

async function latestBlock() {
    
    const node_url = process.env.ERIGON_RPC
    const provider = new ethers.providers.JsonRpcProvider(node_url);

    const block_Number = await provider.getBlockNumber();
    return block_Number
  };


module.exports = {
    latestBlock
}