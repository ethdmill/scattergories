const path = require('path');
const getEnv = require('./gulp/utils/get-env');

const ENV = getEnv(process.env.ENV);
const watch = process.env.WATCH !== 'false';

const development = ENV === 'local' || ENV === 'staging';

console.log(`Starting webpack: `, {
  watch,
  ENV,
});

module.exports = {
  mode: development ? 'development' : 'production',

  entry: {
    nexus: './source/js/nexus.bundle.tsx',
    instance: './source/js/instance.bundle.tsx',
    'instance-external': './source/js/instance-external.bundle.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist/js'
  },
  watch,

  // Enable sourcemaps for debugging webpack's output.
  devtool: development ? 'source-map' : null,

  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.ts', '.tsx',  '.js', '.json'],
    alias: {
      '@client': path.resolve(__dirname, 'source/js/@client'),
      '@nexus': path.resolve(__dirname, 'source/js/@nexus'),
      '@instance': path.resolve(__dirname, 'source/js/@instance'),
      '@instance-external': path.resolve(__dirname, 'source/js/@instance-external'),
      '@shared': path.resolve(__dirname, '../shared/@shared/'),
      '@env': path.resolve(__dirname, '../shared/@env/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'string-replace-loader',
        options: {
          search: '@{ENV}',
          replace: process.env.ENV.toLowerCase(),
        }
      },

      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },

      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
};