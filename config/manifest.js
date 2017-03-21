// nwjs manifest json file

const pkg = require('../package.json')

module.exports = {
  name: pkg.name,
  version: pkg.version,
  main: "index.html",
  window: {
    height: 600,
    width: 500,
    resizable: true,
    toolbar: false,
    frame: false
  }
}
