'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const toDate = [];
  const inFormat = {};

  const [, , , fromSeparator] = fromFormat;
  const [, , , toSeparator] = toFormat;
  const dateArray = date.split(fromSeparator);

  for (let i = 0; i < dateArray.length; i++) {
    inFormat[fromFormat[i]] = dateArray[i];
  }

  for (const item of toFormat) {
    toDate.push(inFormat[item]);
  }

  return toDate.join(toSeparator);
}

module.exports = formatDate;
