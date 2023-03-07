/**
 * This script takes the transaction object, isolates the data that we want, and prints it on the screen
 */

async function parseTransaction(tx) {
    
console.log(`New smart contract detected!`)
console.log(`New smart contract address: ${tx.contractAddress}`)
console.log(`Deployed by address: ${tx.from}`)
console.log(`Deployed by transaction: ${tx.transactionHash}\n`)

}

module.exports = {
    parseTransaction
}


       