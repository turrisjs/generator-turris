var fs = require('fs');

var getHeader = function (license) {
  if (license.toLowerCase() === 'no' || !license || !license.length) {
    return '';
  }

  if (license.toLowerCase() === 'yes') {
    return fs.readFileSync('./LICENSE.md', 'utf8');
  }

  return fs.readFileSync(license, 'utf8');
};

module.exports = {
    getHeader: getHeader,
};
