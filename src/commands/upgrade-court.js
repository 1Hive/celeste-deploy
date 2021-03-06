const fs = require('fs')
const path = require('path')
const Verifier = require('../models/shared/Verifier')
const CourtUpgrader = require('../models/upgrades/CourtUpgrader.v1.1')
const { builder: { output: { default: tokenOutputDir } } } = require('./deploy-minime')

const command = 'upgrade-court'
const describe = 'Upgrade Court core contracts to v1.1'

const builder = {
  input: { alias: 'i', describe: 'Court config JS file', type: 'string', default: './data/input/court' },
  output: { alias: 'o', describe: 'Output dir', type: 'string', default: './data/output/court' },
  verify: { describe: 'Verify deployed contracts on Etherscan, provide API key', type: 'string' },
}

const handlerAsync = async (environment, { network, input, output: outputDir, verify: apiKey }) => {
  const config = require(path.resolve(process.cwd(), input))[network]
  const outputFilepath = path.resolve(process.cwd(), `${outputDir}.${network}.json`)

  const tokenFilepath = path.resolve(process.cwd(), `${tokenOutputDir}.${network}.json`)
  const tokenDeploy = fs.existsSync(tokenFilepath) ? require(tokenFilepath) : {}

  const jurorToken = config.court.feeToken
  if (!jurorToken.address && tokenDeploy[jurorToken.symbol]) {
    jurorToken.address = tokenDeploy[jurorToken.symbol].address
  }

  const verifyer = apiKey ? new Verifier(environment, apiKey) : undefined
  const deployer = new CourtUpgrader(config, environment, outputFilepath, verifyer)
  await deployer.call()
}

module.exports = {
  command,
  describe,
  builder,
  handlerAsync
}
