/*
  These tests assume they will be run against two live APIs: the Blockbook API
  and the Insight API.
*/

'use strict'

const assert = require('chai').assert

const BB2Insight = require('../../index')
let bb2Insight

const BCHJS = require('@chris.troutner/bch-js')
//const bchjs = new BCHJS({restURL: `http://192.168.0.36:12400/v3/`})
const bchjs = new BCHJS({restURL: `http://localhost:3000/v3/`})
//const bchjs = new BCHJS({restURL: `http://decatur.hopto.org:12400/v3/`})

// Open wallet file for comparing data.
const wallet = require('../wallet.json')

describe('#bb2insight', () => {
  before(() => {
    bb2Insight = new BB2Insight()
  })

  it('#address/details should match', async () => {

    // Get data from the Insight API.
    const insightData = await bchjs.Insight.Address.details(wallet.cashAddress)
    //console.log(`insightData: ${JSON.stringify(insightData,null,2)}`)

    // Get converted data from Blockbook API.
    const bbData = await bb2Insight.details(wallet.cashAddress)
    //console.log(`Converted Blockbook data: ${JSON.stringify(bbData,null,2)}`)

    assert.deepEqual(insightData, bbData)
  })

  it('#address/utxo should match', async () => {

    // Get data from the Insight API.
    const insightData = await bchjs.Insight.Address.utxo(wallet.cashAddress)
    delete insightData.scriptPubKey
    //console.log(`insightData: ${JSON.stringify(insightData,null,2)}`)

    // Get converted data from Blockbook API.
    const bbData = await bb2Insight.utxo(wallet.cashAddress)
    //console.log(`Converted Blockbook data: ${JSON.stringify(bbData,null,2)}`)

    assert.deepEqual(insightData, bbData)
  })
})
