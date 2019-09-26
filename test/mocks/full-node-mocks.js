/*
  Mocking library for the full node.
*/

"use strict";

const txDetails = [
  {
    txid: "02a236cef8caf275a9de1df3ddf46db0b6483eac64bd15ded21ef703f431d28b",
    hash: "02a236cef8caf275a9de1df3ddf46db0b6483eac64bd15ded21ef703f431d28b",
    version: 1,
    size: 226,
    locktime: 0,
    vin: [
      {
        txid:
          "d59087dd87f0b5000fb359cdf2a636b59d14ee8b6f5f47ec197e50e567a6400a",
        vout: 1,
        scriptSig: {
          asm:
            "3045022100d95dc7d34d232cceedcdb22fbb2353c90d563bb12d94c900e232b3c87a2877a902200a3bf951d3ef659ae1b72bc0f862e57f6e0025e575ce5ff4d26bda4610c70ef4[ALL|FORKID] 02bd4496979f08b2e32d9f9e6efcef8bd69fdd2b7f3ffcec8e62666b434cd08ce3",
          hex:
            "483045022100d95dc7d34d232cceedcdb22fbb2353c90d563bb12d94c900e232b3c87a2877a902200a3bf951d3ef659ae1b72bc0f862e57f6e0025e575ce5ff4d26bda4610c70ef4412102bd4496979f08b2e32d9f9e6efcef8bd69fdd2b7f3ffcec8e62666b434cd08ce3"
        },
        sequence: 4294967295
      }
    ],
    vout: [
      {
        value: 0.0899704,
        n: 0,
        scriptPubKey: {
          asm:
            "OP_DUP OP_HASH160 35447fd942bae61fd22944e3712440f26eb0a56c OP_EQUALVERIFY OP_CHECKSIG",
          hex: "76a91435447fd942bae61fd22944e3712440f26eb0a56c88ac",
          reqSigs: 1,
          type: "pubkeyhash",
          addresses: ["bitcoincash:qq65gl7eg2awv87j99zwxufygrexav99ds2ph5r5c8"]
        }
      },
      {
        value: 0.12442815,
        n: 1,
        scriptPubKey: {
          asm:
            "OP_DUP OP_HASH160 5bd167ef54400d969d7050329693b8628dbe2e6f OP_EQUALVERIFY OP_CHECKSIG",
          hex: "76a9145bd167ef54400d969d7050329693b8628dbe2e6f88ac",
          reqSigs: 1,
          type: "pubkeyhash",
          addresses: ["bitcoincash:qpdazel023qqm95awpgr995nhp3gm03wduaae5vn8e"]
        }
      }
    ],
    hex:
      "01000000010a40a667e5507e19ec475f6f8bee149db536a6f2cd59b30f00b5f087dd8790d5010000006b483045022100d95dc7d34d232cceedcdb22fbb2353c90d563bb12d94c900e232b3c87a2877a902200a3bf951d3ef659ae1b72bc0f862e57f6e0025e575ce5ff4d26bda4610c70ef4412102bd4496979f08b2e32d9f9e6efcef8bd69fdd2b7f3ffcec8e62666b434cd08ce3ffffffff02b0488900000000001976a91435447fd942bae61fd22944e3712440f26eb0a56c88acbfdcbd00000000001976a9145bd167ef54400d969d7050329693b8628dbe2e6f88ac00000000",
    blockhash:
      "000000000000000001d3e6a0c612ab485f5252371c5a4ff7b875c5862788513d",
    confirmations: 451,
    time: 1569260807,
    blocktime: 1569260807
  },
  {
    txid: "d59087dd87f0b5000fb359cdf2a636b59d14ee8b6f5f47ec197e50e567a6400a",
    hash: "d59087dd87f0b5000fb359cdf2a636b59d14ee8b6f5f47ec197e50e567a6400a",
    version: 1,
    size: 371,
    locktime: 0,
    vin: [
      {
        txid:
          "19708bb5e410d49bb4125beeaa5a8f02c04e4a6f93279099ae09f20dc43aa8e4",
        vout: 0,
        scriptSig: {
          asm:
            "3045022100f79563cf85dd7491052bf410303e6d0e8e25cf5930228293c1fd45a894e6165f022011b001d5afec00ddcda99c5d6717255347dd0ccd0ca9ce249d8a5676efe29976[ALL|FORKID] 03b95490824e4cda10779266f9f44a5309c25c54bc416a74bf97aee8326f6a4bcb",
          hex:
            "483045022100f79563cf85dd7491052bf410303e6d0e8e25cf5930228293c1fd45a894e6165f022011b001d5afec00ddcda99c5d6717255347dd0ccd0ca9ce249d8a5676efe29976412103b95490824e4cda10779266f9f44a5309c25c54bc416a74bf97aee8326f6a4bcb"
        },
        sequence: 4294967295
      },
      {
        txid:
          "074515ab1b78f3b24a04c8a654a3935c882acaac24a0ebc2e266c1b41348147a",
        vout: 1,
        scriptSig: {
          asm:
            "304402203daf69b7ab22269b3d3dbe62675be4d7b3d16fb6e5e4eedb619db5b5cf72300c02206564fd4e659b16ffa07d9d53987ca6ef44cd6706edfe17e449bce17e5b17976d[ALL|FORKID] 02de8bfbf4e4244313f5bfbd46920e943163a03d57d7131b8bdd90da9c3b86a459",
          hex:
            "47304402203daf69b7ab22269b3d3dbe62675be4d7b3d16fb6e5e4eedb619db5b5cf72300c02206564fd4e659b16ffa07d9d53987ca6ef44cd6706edfe17e449bce17e5b17976d412102de8bfbf4e4244313f5bfbd46920e943163a03d57d7131b8bdd90da9c3b86a459"
        },
        sequence: 4294967295
      }
    ],
    vout: [
      {
        value: 0.60860268,
        n: 0,
        scriptPubKey: {
          asm: "OP_HASH160 0511c966ce7c042163a907861683fb3dd3aeb2aa OP_EQUAL",
          hex: "a9140511c966ce7c042163a907861683fb3dd3aeb2aa87",
          reqSigs: 1,
          type: "scripthash",
          addresses: ["bitcoincash:pqz3rjtxee7qggtr4yrcv95rlv7a8t4j4gdevy7gs4"]
        }
      },
      {
        value: 0.21440081,
        n: 1,
        scriptPubKey: {
          asm:
            "OP_DUP OP_HASH160 870eecfe425a735021426b5b8929ac80138fcfd2 OP_EQUALVERIFY OP_CHECKSIG",
          hex: "76a914870eecfe425a735021426b5b8929ac80138fcfd288ac",
          reqSigs: 1,
          type: "pubkeyhash",
          addresses: ["bitcoincash:qzrsam87gfd8x5ppgf44hzff4jqp8r706gux4pn79z"]
        }
      }
    ],
    hex:
      "0100000002e4a83ac40df209ae999027936f4a4ec0028f5aaaee5b12b49bd410e4b58b7019000000006b483045022100f79563cf85dd7491052bf410303e6d0e8e25cf5930228293c1fd45a894e6165f022011b001d5afec00ddcda99c5d6717255347dd0ccd0ca9ce249d8a5676efe29976412103b95490824e4cda10779266f9f44a5309c25c54bc416a74bf97aee8326f6a4bcbffffffff7a144813b4c166e2c2eba024acca2a885c93a354a6c8044ab2f3781bab154507010000006a47304402203daf69b7ab22269b3d3dbe62675be4d7b3d16fb6e5e4eedb619db5b5cf72300c02206564fd4e659b16ffa07d9d53987ca6ef44cd6706edfe17e449bce17e5b17976d412102de8bfbf4e4244313f5bfbd46920e943163a03d57d7131b8bdd90da9c3b86a459ffffffff026ca7a0030000000017a9140511c966ce7c042163a907861683fb3dd3aeb2aa8751264701000000001976a914870eecfe425a735021426b5b8929ac80138fcfd288ac00000000",
    blockhash:
      "0000000000000000009e74eaafa0600937f12c1302c666011ecb1a31197ba45b",
    confirmations: 454,
    time: 1569258600,
    blocktime: 1569258600
  }
];

module.exports = {
  txDetails
};
