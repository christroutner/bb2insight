/*
  These tests assume they will be run against two live APIs: the Blockbook API
  and the Insight API.
*/

'use strict'

const assert = require('chai').assert

const BB2Insight = require('../../index')
let bb2Insight

const BCHJS = require('@chris.troutner/bch-js')
// const bchjs = new BCHJS({restURL: `http://192.168.0.36:12400/v3/`})
const bchjs = new BCHJS({restURL: `http://localhost:3000/v3/`})
//const bchjs = new BCHJS({restURL: `http://decatur.hopto.org:12400/v3/`})

// Open wallet file for comparing data.
const wallet = require('../wallet.json')
//console.log(`wallet: ${JSON.stringify(wallet,null,2)}`)

const insightMocks = require('../mocks/insight-mocks')

describe('#bb2insight', () => {
  before(() => {
    bb2Insight = new BB2Insight()
  })

  // it('#address/details should match', async () => {
  //
  //   // Get data from the Insight API.
  //   const insightData = await bchjs.Insight.Address.details(wallet.cashAddress)
  //   console.log(`insightData: ${JSON.stringify(insightData,null,2)}`)
  //
  //   // Get converted data from Blockbook API.
  //   const bbData = await bb2Insight.details(wallet.cashAddress)
  //   console.log(`Converted Blockbook data: ${JSON.stringify(bbData,null,2)}`)
  //
  //   assert.deepEqual(insightData, bbData)
  // })

  // it('#address/utxo should match', async () => {
  //
  //   // Get data from the Insight API.
  //   const insightData = await bchjs.Insight.Address.utxo(wallet.cashAddress)
  //   //delete insightData.scriptPubKey
  //   console.log(`insightData: ${JSON.stringify(insightData,null,2)}`)
  //
  //   // Get converted data from Blockbook API.
  //   const bbData = await bb2Insight.utxo(wallet.cashAddress)
  //   //console.log(`Converted Blockbook data: ${JSON.stringify(bbData,null,2)}`)
  //
  //   assert.deepEqual(insightData, bbData)
  // })

  it('#address/transactions should match', async () => {
    const testAddr = 'bitcoincash:qzrsam87gfd8x5ppgf44hzff4jqp8r706gux4pn79z'
    //console.log(`insightMocks.txDetails: ${JSON.stringify(insightMocks.txDetails,null,2)}`)

    const result = await bb2Insight.transactions(testAddr)
    //console.log(`result: ${JSON.stringify(result,null,2)}`)
  })
})
