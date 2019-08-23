/*
  Tests
*/

'use strict'

const assert = require('chai').assert

const BB2Insight = require('../index')
let bb2Insight

describe('#test', () => {
  before(() => {
    bb2Insight = new BB2Insight()
  })

  it('#first test', () => {
    bb2Insight.hello()
  })
})
