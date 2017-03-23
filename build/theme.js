var et = require('element-theme')
var path = require('path')
var join = path.join

var config = join(__dirname, '../src/theme/variables.css')
// watch mode
et.watch({
  config: config,
  out: join(__dirname, '../src/theme')
})

// build
et.run({
  config: config,
  out: join(__dirname, '../src/theme'),
  minimize: true
})