/*

 */

"use strict";

const addrDetails = {
  balance: 0.00015,
  balanceSat: 15000,
  totalReceived: 0.00015,
  totalReceivedSat: 15000,
  totalSent: 0,
  totalSentSat: 0,
  unconfirmedBalance: 0,
  unconfirmedBalanceSat: 0,
  unconfirmedTxApperances: 0,
  txApperances: 3,
  transactions: [
    "75f7da9402f7211a6a5f8c96ce3a64e7606e8f6be42c2857dfa1e414a4e91863",
    "f62966d97bb4e556b74b20363a1d6aa52b95073242a083291f2aa94fdee3752f",
    "d6d826222bd08a6a6557b6231b51c2c7099270c7520f592d184cd5c4a0027d1e"
  ],
  legacyAddress: "1Ki5AMDetWvxVE4PiBXQiRsw7KTXsR7Usi",
  cashAddress: "bitcoincash:qrxndjkg00x2v824xws0my37y8he2fl6xs77st28yx",
  currentPage: 0,
  pagesTotal: 1
};

const utxoDetails = {
  utxos: [
    {
      txid: "75f7da9402f7211a6a5f8c96ce3a64e7606e8f6be42c2857dfa1e414a4e91863",
      vout: 0,
      amount: 0.00003,
      satoshis: 3000,
      height: 597083,
      confirmations: 4914
    },
    {
      txid: "f62966d97bb4e556b74b20363a1d6aa52b95073242a083291f2aa94fdee3752f",
      vout: 0,
      amount: 0.00005,
      satoshis: 5000,
      height: 597082,
      confirmations: 4915
    },
    {
      txid: "d6d826222bd08a6a6557b6231b51c2c7099270c7520f592d184cd5c4a0027d1e",
      vout: 0,
      amount: 0.00007,
      satoshis: 7000,
      height: 597082,
      confirmations: 4915
    }
  ],
  legacyAddress: "1Ki5AMDetWvxVE4PiBXQiRsw7KTXsR7Usi",
  cashAddress: "bitcoincash:qrxndjkg00x2v824xws0my37y8he2fl6xs77st28yx",
  scriptPubKey: "76a914cd36cac87bcca61d5533a0fd923e21ef9527fa3488ac"
};

const txDetails = {
  pagesTotal: 1,
  txs: [
    {
      txid: "02a236cef8caf275a9de1df3ddf46db0b6483eac64bd15ded21ef703f431d28b",
      version: 1,
      locktime: 0,
      vin: [
        {
          txid:
            "d59087dd87f0b5000fb359cdf2a636b59d14ee8b6f5f47ec197e50e567a6400a",
          vout: 1,
          sequence: 4294967295,
          n: 0,
          scriptSig: {
            hex:
              "483045022100d95dc7d34d232cceedcdb22fbb2353c90d563bb12d94c900e232b3c87a2877a902200a3bf951d3ef659ae1b72bc0f862e57f6e0025e575ce5ff4d26bda4610c70ef4412102bd4496979f08b2e32d9f9e6efcef8bd69fdd2b7f3ffcec8e62666b434cd08ce3",
            asm:
              "3045022100d95dc7d34d232cceedcdb22fbb2353c90d563bb12d94c900e232b3c87a2877a902200a3bf951d3ef659ae1b72bc0f862e57f6e0025e575ce5ff4d26bda4610c70ef4[ALL|FORKID] 02bd4496979f08b2e32d9f9e6efcef8bd69fdd2b7f3ffcec8e62666b434cd08ce3"
          },
          addr: "1DK86xVRBLxHUBvZAdbVka8PpAsqxqHbpU",
          valueSat: 21440081,
          value: 0.21440081,
          doubleSpentTxID: null
        }
      ],
      vout: [
        {
          value: "0.08997040",
          n: 0,
          scriptPubKey: {
            hex: "76a91435447fd942bae61fd22944e3712440f26eb0a56c88ac",
            asm:
              "OP_DUP OP_HASH160 35447fd942bae61fd22944e3712440f26eb0a56c OP_EQUALVERIFY OP_CHECKSIG",
            addresses: ["15resbBg5S7Mz2SUnYThDWHz8SteEQPqzK"],
            type: "pubkeyhash"
          },
          spentTxId: null,
          spentIndex: null,
          spentHeight: null
        },
        {
          value: "0.12442815",
          n: 1,
          scriptPubKey: {
            hex: "76a9145bd167ef54400d969d7050329693b8628dbe2e6f88ac",
            asm:
              "OP_DUP OP_HASH160 5bd167ef54400d969d7050329693b8628dbe2e6f OP_EQUALVERIFY OP_CHECKSIG",
            addresses: ["19NVMEw6aq2uTPELoFxm25QiovgGmvh9C7"],
            type: "pubkeyhash"
          },
          spentTxId:
            "1bd3f2a004b330d88a17e7b4c4657e98f7350b37189126ce2629c1037daf573d",
          spentIndex: 0,
          spentHeight: 601549
        }
      ],
      blockhash:
        "000000000000000001d3e6a0c612ab485f5252371c5a4ff7b875c5862788513d",
      blockheight: 601549,
      confirmations: 1,
      time: 1569260807,
      blocktime: 1569260807,
      valueOut: 0.21439855,
      size: 226,
      valueIn: 0.21440081,
      fees: 0.00000226
    },
    {
      txid: "d59087dd87f0b5000fb359cdf2a636b59d14ee8b6f5f47ec197e50e567a6400a",
      version: 1,
      locktime: 0,
      vin: [
        {
          txid:
            "19708bb5e410d49bb4125beeaa5a8f02c04e4a6f93279099ae09f20dc43aa8e4",
          vout: 0,
          sequence: 4294967295,
          n: 0,
          scriptSig: {
            hex:
              "483045022100f79563cf85dd7491052bf410303e6d0e8e25cf5930228293c1fd45a894e6165f022011b001d5afec00ddcda99c5d6717255347dd0ccd0ca9ce249d8a5676efe29976412103b95490824e4cda10779266f9f44a5309c25c54bc416a74bf97aee8326f6a4bcb",
            asm:
              "3045022100f79563cf85dd7491052bf410303e6d0e8e25cf5930228293c1fd45a894e6165f022011b001d5afec00ddcda99c5d6717255347dd0ccd0ca9ce249d8a5676efe29976[ALL|FORKID] 03b95490824e4cda10779266f9f44a5309c25c54bc416a74bf97aee8326f6a4bcb"
          },
          addr: "17dQc6wJtDcKovo7ZY8bnh7cnzs6GkwpUd",
          valueSat: 82253075,
          value: 0.82253075,
          doubleSpentTxID: null
        },
        {
          txid:
            "074515ab1b78f3b24a04c8a654a3935c882acaac24a0ebc2e266c1b41348147a",
          vout: 1,
          sequence: 4294967295,
          n: 1,
          scriptSig: {
            hex:
              "47304402203daf69b7ab22269b3d3dbe62675be4d7b3d16fb6e5e4eedb619db5b5cf72300c02206564fd4e659b16ffa07d9d53987ca6ef44cd6706edfe17e449bce17e5b17976d412102de8bfbf4e4244313f5bfbd46920e943163a03d57d7131b8bdd90da9c3b86a459",
            asm:
              "304402203daf69b7ab22269b3d3dbe62675be4d7b3d16fb6e5e4eedb619db5b5cf72300c02206564fd4e659b16ffa07d9d53987ca6ef44cd6706edfe17e449bce17e5b17976d[ALL|FORKID] 02de8bfbf4e4244313f5bfbd46920e943163a03d57d7131b8bdd90da9c3b86a459"
          },
          addr: "12aDMzFD6iGnaE9t9g9RLNgsyYn8fskGQt",
          valueSat: 47646,
          value: 0.00047646,
          doubleSpentTxID: null
        }
      ],
      vout: [
        {
          value: "0.60860268",
          n: 0,
          scriptPubKey: {
            hex: "a9140511c966ce7c042163a907861683fb3dd3aeb2aa87",
            asm: "OP_HASH160 0511c966ce7c042163a907861683fb3dd3aeb2aa OP_EQUAL",
            addresses: ["329pcM2wdFSTUxrrW3AQjheyWWN8SrqbhL"],
            type: "scripthash"
          },
          spentTxId: null,
          spentIndex: null,
          spentHeight: null
        },
        {
          value: "0.21440081",
          n: 1,
          scriptPubKey: {
            hex: "76a914870eecfe425a735021426b5b8929ac80138fcfd288ac",
            asm:
              "OP_DUP OP_HASH160 870eecfe425a735021426b5b8929ac80138fcfd2 OP_EQUALVERIFY OP_CHECKSIG",
            addresses: ["1DK86xVRBLxHUBvZAdbVka8PpAsqxqHbpU"],
            type: "pubkeyhash"
          },
          spentTxId:
            "02a236cef8caf275a9de1df3ddf46db0b6483eac64bd15ded21ef703f431d28b",
          spentIndex: 0,
          spentHeight: 601549
        }
      ],
      blockhash:
        "0000000000000000009e74eaafa0600937f12c1302c666011ecb1a31197ba45b",
      blockheight: 601546,
      confirmations: 4,
      time: 1569258600,
      blocktime: 1569258600,
      valueOut: 0.82300349,
      size: 371,
      valueIn: 0.82300721,
      fees: 0.00000372
    }
  ],
  legacyAddress: "1DK86xVRBLxHUBvZAdbVka8PpAsqxqHbpU",
  cashAddress: "bitcoincash:qzrsam87gfd8x5ppgf44hzff4jqp8r706gux4pn79z",
  currentPage: 0
};

module.exports = {
  addrDetails,
  utxoDetails,
  txDetails
};
