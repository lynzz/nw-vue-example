// default nwbuild config
const _ = require('lodash')
const path = require('path')

const build = {
  files: './tmp/build/**',
  // version: 'last',
  version: '0.21.3',
  platforms: ['osx64', 'win32'], // win32, win64, osx32, osx64, linux32, linux64
  flavor: 'normal', // 'sdk', 'normal', 'mas', 'nacl'

  buildType: 'versioned',
  buildDir: 'dist',

  zip: true
}

const dev = _.merge(_.clone(build), {
  files: './tmp/dev/**',
  flavor: 'sdk',
  argv: ['--load-extension=build/vue-devtools']
})

module.exports = { build, dev }
