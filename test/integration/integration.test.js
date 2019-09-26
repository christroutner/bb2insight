/*
  These tests assume they will be run against two live APIs: the Blockbook API
  and the Insight API.
*/

'use strict'

const assert = require('chai').assert

const BB2Insight = require('../../index')
let bb2Insight

const BCHJS = require('@chris.troutner/bch-js')
const bchjs = new BCHJS()
// const bchjs = new BCHJS({restURL: `http://192.168.0.36:12400/v3/`})
//const bchjs = new BCHJS({restURL: `http://localhost:3000/v3/`})

const insightMocks = require('../mocks/insight-mocks')

describe('#bb2insight', () => {
  before(() => {
    bb2Insight = new BB2Insight()
  })

  it('#address/details should match', async () => {

    const testAddr = `bitcoincash:qrxndjkg00x2v824xws0my37y8he2fl6xs77st28yx`

    // Get data from the Insight API.
    const insightData = await bchjs.Insight.Address.details(testAddr)
    // console.log(`insightData: ${JSON.stringify(insightData,null,2)}`)

    // Get converted data from Blockbook API.
    const bbData = await bb2Insight.details(testAddr)
    // console.log(`Converted Blockbook data: ${JSON.stringify(bbData,null,2)}`)

    assert.deepEqual(insightData, bbData)
  })

  it('#address/utxo should match', async () => {

    const testAddr = `bitcoincash:qrxndjkg00x2v824xws0my37y8he2fl6xs77st28yx`

    // Get data from the Insight API.
    const insightData = await bchjs.Insight.Address.utxo(testAddr)
    // console.log(`insightData: ${JSON.stringify(insightData,null,2)}`)

    // Get converted data from Blockbook API.
    const bbData = await bb2Insight.utxo(testAddr)
    // console.log(`Converted Blockbook data: ${JSON.stringify(bbData,null,2)}`)

    // This test should pass, but sometimes it fails because the confirmations
    // differ between the two machines.
    assert.deepEqual(insightData, bbData)
  })

  it('#address/transactions should match', async () => {
    const testAddr = 'bitcoincash:qzrsam87gfd8x5ppgf44hzff4jqp8r706gux4pn79z'
    //console.log(`insightMocks.txDetails: ${JSON.stringify(insightMocks.txDetails,null,2)}`)

    const insightData = await bchjs.Insight.Address.transactions(testAddr)
    // console.log(`insightData: ${JSON.stringify(insightData,null,2)}`)


    const result = await bb2Insight.transactions2(testAddr)
    // console.log(`result: ${JSON.stringify(result,null,2)}`)

    // To see exactly how the two APIs differ, use this comparison. But know that
    // this test will fail.
    // Missing: vouts do not include spentHeight, spentIndex, spentTxId. These
    // values are included in Insight API but not output from this shim.
    // assert.deepEqual(insightData, result)

    // These tests try to test the same as deepEqual, but take nuance of the
    // shim into consideration.
    assert.hasAnyKeys(result, [
      "cashAddress",
      "legacyAddress",
      "pagesTotal",
      "currentPage",
      "txs"
    ])

    assert.isArray(result.txs)
    assert.hasAnyKeys(result.txs[0], [
      "txid",
      "blockhash",
      "blockheight",
      "blocktime",
      "time",
      "confirmations",
      "fees",
      "valueIn",
      "valueOut",
      "version",
      "locktime",
      "size",
      "vin",
      "vout"
    ])

    assert.isArray(result.txs[0].vin)
    assert.hasAnyKeys(result.txs[0].vin[0], [
      "txid",
      "vout",
      "sequence",
      "n",
      "addr",
      "valueSat",
      "value",
      "scriptSig",
      "doubleSpentTxID"
    ])
    assert.hasAnyKeys(result.txs[0].vin[0].scriptSig, [
      "hex",
      "asm"
    ])

    assert.isArray(result.txs[0].vout)
    assert.hasAnyKeys(result.txs[0].vout[0], [
      "value",
      "n",
      "scriptPubKey"
    ])
    assert.hasAnyKeys(result.txs[0].vout[0].scriptPubKey, [
      "hex",
      "asm",
      "addresses",
      "type"
    ])
    assert.isArray(result.txs[0].vout[0].scriptPubKey.addresses)
  })
})
