# bb2insight
This is an npm shim library that allows Blockbook API to be a drop-in replacement
for the Insight API for the Bitcoin Cash (BCH) network.

- [npm library](https://www.npmjs.com/package/bb2insight)


[![Build Status](https://travis-ci.org/christroutner/bb2insight.svg?branch=master)](https://travis-ci.org/christroutner/bb2insight)

## Install
`npm install`

## Test
`npm test`

- These tests assume the use of bch-js with availability to live Insight API
and Blockbook API.

- A `wallet.json` file is expected to exist in the test directory, which
matches this pattern:
```
{
  "mnemonic": "apology cup border bar frog woman asthma flock speak chicken copy bless",
  "cashAddress": "bitcoincash:qrxndjkg00x2v824xws0my37y8he2fl6xs77st28yx",
  "legacyAddress": "1Ki5AMDetWvxVE4PiBXQiRsw7KTXsR7Usi",
  "WIF": "L3qpHiUdqmWcpUgqvdKiNAmbq9m6BQGXaKTX4w2sQpZNbygdfQSk"
}
```

## License
MIT
