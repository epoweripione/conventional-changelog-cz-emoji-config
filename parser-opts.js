'use strict'

const customConfig = require('./customConfig')

let headerPatternRegExp = /^(\w*)(?:\((.*)\))?: (.*)$/
let headerCorrespondenceList = ['type','scope','subject']

if (customConfig.headerPattern) {
  headerPatternRegExp = customConfig.headerPattern
}

if (customConfig.headerCorrespondence) {
  headerCorrespondenceList = customConfig.headerCorrespondence
}

// format: '%B%n-hash-%n%H%n-gitTags-%n%d%n-committerDate-%n%ci%n-authorName-%n%an%n-authorEmail-%n%ae',
module.exports = {
  headerPattern: headerPatternRegExp,
  headerCorrespondence: headerCorrespondenceList,
  noteKeywords: ['BREAKING CHANGE'],
  revertPattern: /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
  revertCorrespondence: ['header', 'hash']
}

// module.exports = {
//   headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
//   headerCorrespondence: ['type', 'scope', 'subject'],
//   noteKeywords: ['BREAKING CHANGE'],
//   revertPattern: /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
//   revertCorrespondence: ['header', 'hash']
// }
