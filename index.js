/**
 * Word Count
 *
 * Word count in respect of CJK characters.
 *
 * Copyright (c) 2015 - 2016 by Hsiaoming Yang.
 */

var pattern = /[\u0021-\u007e\u00A1-\u024f\u0300-\u036f\u0392-\u03c9\u2018-\u201f\u00c0-\u00ff\u0600-\u06ff\u0400-\u04FF]+|[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+|[\u00e4\u00c4\u00e5\u00c5\u00f6\u00d6]+/g;

module.exports = function (data) {
  var m = data.match(pattern);
  var count = 0;
  if (!m) {
    return 0;
  }
  for (var i = 0; i < m.length; i++) {
    if (m[i].charCodeAt(0) >= 0x4e00) {
      count += m[i].length;
    } else {
      count += 1;
    }
  }
  return count;
};
