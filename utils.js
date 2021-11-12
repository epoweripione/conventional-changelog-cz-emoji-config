"use strict"

let getMapDisplayName = function getMapDisplayName(mapCode, mapList) {
  let entries = Object.entries(mapList)

  for (let _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    let _a = entries_1[_i], key = _a[0], value = _a[1]

    if (mapCode === key) {
      return value
    }

    if (!mapCode && mapList['*']) {
      return mapList['*']
    }
  }

  return mapCode
}

exports.getMapDisplayName = getMapDisplayName
