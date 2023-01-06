/** 
 * This function uses the hexlify function from the ethers library to convert the decimal number to a hexadecimal string.
 * The hexlify function returns the Hex number with an extra 0 -> 0x0 which won't be usable, hexStripZeros fixes this.
 * Then we export an object that contains the toHex function.
*/

const ethers = require('ethers');

function toHex(decimal) {
    const hex = ethers.utils.hexlify(decimal)
    const fixPadding = ethers.utils.hexStripZeros(hex)

    return fixPadding  
}


module.exports = {
    toHex
}