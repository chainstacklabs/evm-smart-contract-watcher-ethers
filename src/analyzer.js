const provider = require('./provider');
const { toHex } = require('./toHex')
const { latestBlock } = require('./latestBlock')
const { parseTransaction } = require('./parser')

const findSmartContract = async () => {

    // Find the latest block
    const blockToAnalyze = await latestBlock();

    // Convert the latest block to Hex
    const blockInHex = toHex(blockToAnalyze)

    // Sometimes Erigon returns an invalid response; try/catch will tell you if something is wrong.
    try {

        // Get the transaction receipts
        const blockReceipt = await provider.send("eth_getBlockReceipts", [blockInHex]);
        //console.log(blockReceipt);

        // Iterate over the transactions in the block
        for (const tx of blockReceipt) {

            if (tx.contractAddress != null) {

                // This function parses and prints the result
                parseTransaction(tx)
            }
        }
    } catch (error) {
        console.log(`An error occurred, please try again. \n ERROR: ${error}`)
    }
}


module.exports = {
    findSmartContract
}