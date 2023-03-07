/**
 * This script exports a function that retrieves the latest block number
 * Then we export an object that contains the toHex latestBlock.
 */


const provider = require('./provider');

async function latestBlock() {

    const block_Number = await provider.getBlockNumber();
    return block_Number
  };


module.exports = {
    latestBlock
}