// nwjs manifest json file

const pkg = require('../package.json')

module.exports = {
  name: pkg.name,
  version: pkg.version,
  main: "index.html",
  'bg-script': 'background.js',
  window: {
    height: 600,
    width: 900,
    resizable: true,
    toolbar: true,
    frame: false
  }
}
