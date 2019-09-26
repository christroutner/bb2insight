/*
  A utility library used to generate a scriptPubKey from a public address
*/

'use strict'

const bchaddr = require('bchaddrjs')
const BITBOXSDK = require('bitbox-sdk').BITBOX
const BITBOX = new BITBOXSDK()

// Returns a string representing the hex representation of the addresses scriptPubKey.
function getScriptPubKey(addr) {
  try {
    const decoded = bchaddr.decodeAddress(addr)

    let script

    if(decoded.type === 'p2pkh') {
      script = [
        BITBOX.Script.opcodes.OP_DUP,
        BITBOX.Script.opcodes.OP_HASH160,
        Buffer.from(decoded.hash, "hex"),
        BITBOX.Script.opcodes.OP_EQUALVERIFY,
        BITBOX.Script.opcodes.OP_CHECKSIG
      ]
    } else if(decoded.type === 'p2sh') {
      script = [
        BITBOX.Script.opcodes.OP_HASH160,
        Buffer.from(decoded.hash, "hex"),
        BITBOX.Script.opcodes.OP_EQUAL
      ]
    }

    const data = BITBOX.Script.encode(script)

    return data.toString('hex')
  } catch(err) {
    console.error(`Error in get-scriptpubkey.js/getScriptPubKey()`)
    throw err
  }
}

module.exports = {
  getScriptPubKey
}
