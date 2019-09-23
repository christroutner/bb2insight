/*
  Shim library for making Blockbook backwards compatible with Insight API.
  Based on this gist:
  https://gist.github.com/christroutner/ff1af0ee4f5a207571fe7857acdc916e
*/

'use strict'

const BCHJS = require('@chris.troutner/bch-js')
//const bchjs = new BCHJS({restURL: `http://192.168.0.36:12400/v3/`})
const bchjs = new BCHJS({restURL: `http://localhost:3000/v3/`})

const scriptPubKey = require('./lib/get-scriptpubkey')

const SATS_PER_BCH = 100000000

class BB2Insight {
  constructor() {}

  // Convert Blockbook.balance output to exactly match the Address.details()
  // call in rest.bitcoin.com.
  async details(cashAddr) {
    // Get raw data from Blockbook.
    const bbData = await bchjs.Blockbook.balance(cashAddr)
    // console.log(`Blockbook original data: ${JSON.stringify(bbData,null,2)}`)

    const newData = {}

    // Manipulate data to match Insight API format.
    newData.balanceSat = Number(bbData.balance)
    newData.balance = newData.balanceSat / SATS_PER_BCH

    newData.totalReceivedSat = Number(bbData.totalReceived)
    newData.totalReceived = newData.totalReceivedSat / SATS_PER_BCH

    newData.totalSentSat = Number(bbData.totalSent)
    newData.totalSent = newData.totalSentSat / SATS_PER_BCH

    newData.unconfirmedBalanceSat = Number(bbData.unconfirmedBalance)
    newData.unconfirmedBalance = newData.unconfirmedBalanceSat / SATS_PER_BCH

    newData.unconfirmedTxApperances = bbData.unconfirmedTxs

    newData.txApperances = bbData.txs

    newData.transactions = bbData.txids

    newData.cashAddress = bbData.address
    console.log(`newData.cashAddress: ${newData.cashAddress}`)
    newData.legacyAddress = bchjs.Address.toLegacyAddress(newData.cashAddress)

    newData.currentPage = bbData.page - 1
    newData.pagesTotal = bbData.totalPages

    return newData
  }

  // Convert Blockbook utxo call to exactly match the Address.utxo
  async utxo(cashAddr) {
    // Get raw data from Blockbook.
    const bbData = await bchjs.Blockbook.utxo(cashAddr)
    //console.log(`Blockbook original data: ${JSON.stringify(bbData,null,2)}`)

    const newData = {}

    newData.cashAddress = cashAddr
    newData.legacyAddress = bchjs.Address.toLegacyAddress(newData.cashAddress)

    newData.scriptPubKey = scriptPubKey.getScriptPubKey(cashAddr)

    newData.utxos = []
    for(let i=0; i < bbData.length; i++) {
      const bbUtxo = bbData[i]
      const thisUtxo = {}

      thisUtxo.txid = bbUtxo.txid
      thisUtxo.vout = bbUtxo.vout
      thisUtxo.satoshis = Number(bbUtxo.value)
      thisUtxo.amount = thisUtxo.satoshis / SATS_PER_BCH
      thisUtxo.height = bbUtxo.height
      thisUtxo.confirmations = bbUtxo.confirmations

      newData.utxos.push(thisUtxo)
    }

    return newData
  }

  async transactions(cashAddr) {
    // Get address details
    const addrDetails = await this.details(cashAddr)
    // console.log(`addrDetails: ${JSON.stringify(addrDetails,null,2)}`)

    // Scaffold the output object.
    const outObj = {
      cashAddress: addrDetails.cashAddress,
      legacyAddress: addrDetails.legacyAddress,
      pagesTotal: addrDetails.pagesTotal,
      curentPage: addrDetails.currentPage
    }

    // Combine tx details into an array.
    const txIds = addrDetails.transactions

    // TODO add some code here to break up the txIds array into 20 element chunks.
    // Need to add test cases for this corner case.

    // Use the bulk method for retrieving details on 20 transactions at a time.
    const txDetails = await bchjs.RawTransactions.getRawTransaction(txIds, true)
    console.log(`txDetails: ${JSON.stringify(txDetails,null,2)}`)

    // Loop through each transaction to add metadata like valueIn, valueOut,
    // and fees.
    for(let i=0; i < txDetails.length; i++) {
      const thisTx = txDetails[i]

      // Get the total value output in the transaction (in BCH).
      let valueOut = 0
      thisTx.vout.map(vout => valueOut += vout.value)
      thisTx.valueOut = valueOut

      // TODO: Add valueIn and fees for each tx.
      // Research the blockbook API first though:
      // https://github.com/trezor/blockbook/blob/master/docs/api.md#get-transaction
    }

    // Add the TX details to the output object.
    outObj.txs = txDetails

    return outObj
  }
}

module.exports = BB2Insight
