require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var shelljs = require('shelljs')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

const co = require('co')
const fs = require('mz/fs')
const manifest = require('../config/manifest')
const _ = require('lodash')
const NwBuilder = require('nw-builder')

const dependencies = require('../package.json').dependencies

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    co(function* () {
      yield fs.writeFile(
        'tmp/build/package.json',
        JSON.stringify(_.merge(manifest, { dependencies }), null, 2),
        'utf8'
      )

      const deps = {}
      const resolve = p => {
        if (!deps[p]) {
          deps[p] = true
          const p_deps = require(`${p}/package.json`).dependencies || []
          Object.keys(p_deps).forEach(function (p) {
            return resolve(p)
          })
        }
      }

      resolve('..')
      delete deps['..']
      
      shelljs.mkdir('-p', 'tmp/build/node_modules')
      // shelljs.cp(path.join(__dirname, '../background.js'), 'tmp/build')
      
      shelljs.rm('-r', 'tmp/build/node_modules/*')
      Object.keys(deps).forEach(function (p) {
        console.log(`copy dependencies node_modules/${p}`)
        shelljs.cp('-r', `node_modules/${p}`, 'tmp/build/node_modules/')
      })
      const nwconfig = require('./nwbuild').build

      const nw = new NwBuilder(nwconfig)
      nw.on('log', console.log)
      yield nw.build()
      console.log(chalk.cyan('  Build complete.\n'))

    })
    
    // console.log(chalk.yellow(
    //   '  Tip: built files are meant to be served over an HTTP server.\n' +
    //   '  Opening index.html over file:// won\'t work.\n'
    // ))
  })
})
