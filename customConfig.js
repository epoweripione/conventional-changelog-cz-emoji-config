"use strict"

const cosmiconfig = require('cosmiconfig')

const explorerSync = cosmiconfig.cosmiconfigSync('changelog')

const config = (explorerSync.search() || {
  config: {}
}).config

// console.log(JSON.stringify(config))
// console.log(config.headerPattern)

exports.default = config
module.exports = exports.default
