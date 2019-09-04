/*
  These tests assume they will be run against two live APIs: the Blockbook API
  and the Insight API.
*/

'use strict'

const assert = require('chai').assert

const BB2Insight = require('../../index')
let bb2Insight

// const BCHJS = require('@chris.troutner/bch-js')
// const bchjs = new BCHJS({restURL: `http://192.168.0.36:12400/v3/`})
//const bchjs = new BCHJS({restURL: `http://decatur.hopto.org:12400/v3/`})

// Open wallet file for comparing data.
//const wallet = require('../wallet.json')

describe('#bb2insight', () => {
  before(() => {
    bb2Insight = new BB2Insight()
  })

  it('should execute unit tests', () => {
    //bb2Insight.hello()
  })

})
