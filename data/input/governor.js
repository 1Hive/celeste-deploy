const governor = require('../../src/models/shared/Governor')

const rpc =     governor('0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1')    // Ganache first deterministic
const aragen =  governor('0xb4124cEB3451635DAcedd11767f004d8a28c6eE7')    // Aragon first deterministic address
const ropsten = governor('0x0090aED150056316E37FE6DFa10Dc63E79D173B6')    // EOA

const rinkeby = governor({
  agent:        '0xdf456B614fE9FF1C7c0B380330Da29C96d40FB02',             // EOA
  voting:       '0xdf456B614fE9FF1C7c0B380330Da29C96d40FB02',             // EOA
  tokenManager: '0xdf456B614fE9FF1C7c0B380330Da29C96d40FB02',             // EOA
})

const xdai = governor({
  agent:        '0x23e4941f58896705d5c29d641979c4f66b03496f',             // Celeste DAO Voting
  voting:       '0x23e4941f58896705d5c29d641979c4f66b03496f',             // Celeste DAO Voting
  tokenManager: '0x23e4941f58896705d5c29d641979c4f66b03496f',             // Celeste DAO Voting
})

const mainnet = governor({ // https://mainnet.aragon.org/#/network
  agent:        '0x5e8c17a6065c35b172b10e80493d2266e2947df4',             // Agent of AN DAO
  voting:       '0x240b4de6000b4ad52ceaa1057c2647bfc24ce697',             // Voting of AN DAO
  tokenManager: '0xda15e525b09266488c95c2742e849ca71683a0f5',             // Token Manager of AN DAO
})

module.exports = {
  rpc,
  rinkeby,
  mainnet,
  xdai
}
