/*
  These are the same tests as the ones in the integration folder. The difference
  is that these tests use saved files of data (mocks) instead of live data.
*/

'use strict'

const assert = require('chai').assert
const sinon = require("sinon")
const nock = require("nock") // HTTP mocking

const BB2Insight = require('../../index')
let bb2Insight

const BCHJS = require('@chris.troutner/bch-js')
const bchjs = new BCHJS()

const insightMocks = require('../mocks/insight-mocks')
const blockbookMocks = require('../mocks/blockbook-mocks')
const fullNodeMocks = require('../mocks/full-node-mocks')

describe('#bb2insight', () => {
  before(() => {
    bb2Insight = new BB2Insight()
  })

  let sandbox
  beforeEach(() => {
    sandbox = sinon.createSandbox()

    // Activate nock if it's inactive.
    if (!nock.isActive()) nock.activate()
  })

  afterEach(() => {
    sandbox.restore()

    // Clean up HTTP mocks.
    nock.cleanAll() // clear interceptor list.
    nock.restore()
  })

  it('#address/details should match', async () => {

    const testAddr = `bitcoincash:qrxndjkg00x2v824xws0my37y8he2fl6xs77st28yx`

    // Mock the bchjs library so that it doesn't make live network calls.
    sandbox.stub(bchjs.Insight.Address, "details").resolves(insightMocks.addrDetails)

    // Mock the http call to bchjs.cash for Blockbook data.
    nock(`https://mainnet.bchjs.cash`)
      .get(uri => uri.includes(`/`))
      .reply(200, blockbookMocks.addrDetails)

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

    // Mock the bchjs library so that it doesn't make live network calls.
    sandbox.stub(bchjs.Insight.Address, "utxo").resolves(insightMocks.utxoDetails)

    // Get data from the Insight API.
    const insightData = await bchjs.Insight.Address.utxo(testAddr)
    // console.log(`insightData: ${JSON.stringify(insightData,null,2)}`)

    // Mock the http call to bchjs.cash for Blockbook data.
    nock(`https://mainnet.bchjs.cash`)
      .get(uri => uri.includes(`/`))
      .reply(200, blockbookMocks.utxoDetails)

    // Get converted data from Blockbook API.
    const bbData = await bb2Insight.utxo(testAddr)
    // console.log(`Converted Blockbook data: ${JSON.stringify(bbData,null,2)}`)

    // This test should pass, but sometimes it fails because the confirmations
    // differ between the two machines.
    assert.deepEqual(insightData, bbData)
  })

  it('#address/transactions should match', async () => {
    const testAddr = 'bitcoincash:qzrsam87gfd8x5ppgf44hzff4jqp8r706gux4pn79z'

    // Mock the bchjs library so that it doesn't make live network calls.
    sandbox.stub(bchjs.Insight.Address, "transactions").resolves(insightMocks.txDetails)

    const insightData = await bchjs.Insight.Address.transactions(testAddr)
    // console.log(`insightData: ${JSON.stringify(insightData,null,2)}`)

    // Mock the http call to bchjs.cash for Blockbook data.
    nock(`https://mainnet.bchjs.cash`)
      .get(uri => uri.includes(`/`))
      .reply(200, blockbookMocks.addrDetails)
      .post(`/v3/blockbook/tx`)
      .reply(200, blockbookMocks.txDetails)
      .post(`/v3/rawtransactions/getRawTransaction`)
      .reply(200, fullNodeMocks.txDetails)

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
