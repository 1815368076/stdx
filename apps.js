module.exports = {
  nyc: {
    bin: 'nyc/bin/nyc.js',
    api: [
      'nyc',
      'nyc/bin/wrap.js',
    ]
  },
  ava: {
    bin: 'ava/cli.js',
    api: 'ava'
  },
  standard: {
    bin: 'standard/bin/cmd.js',
    api: [
      'standard',
      'eslint-plugin-vue'
    ]
  },
  rollup: {
    bin: 'rollup/bin/rollup',
    api: [
      'rollup',
      'rollup-pluginutils',
      'rollup-plugin-node-resolve',
      'rollup-plugin-commonjs',
      'rollup-plugin-json',
      'rollup-plugin-includepaths',
      'rollup-plugin-babel',
      'rollup-plugin-uglify',
      'rollup-plugin-vue',
      'rollup-plugin-re',
    ]
  },
  uglifyjs: {
    bin: 'uglify-es/bin/uglifyjs',
    api: 'uglify-es'
  },
  "node-sass": {
    bin: 'node-sass/bin/node-sass',
    api: 'node-sass'
  },
  'standard-sass': {
    bin: 'standard-sass/dist/standard-sass.js'
  }
}
