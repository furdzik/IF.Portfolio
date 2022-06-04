const { resolve } = require('path');
const { LoaderOptionsPlugin, DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dotenv = require('dotenv');

const { version } = require('../../package');

module.exports = ({ production }) => {
  const envVariables = dotenv.config().parsed;

  return {
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
        mainFields: ['browser', 'main', 'module'],
        modules: [resolve('./'), resolve('node_modules')]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules\/(?!react-intl|intl-messageformat|intl-messageformat-parser)/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                ['babel-plugin-styled-components', {
                  'pure': !!production,
                  'displayName': !production
                }]
              ]
            }
          }
        },
        {
          test: /\.(png|jpg|gif|ico)$/,
          exclude: /node_modules\/(?!react-intl|intl-messageformat|intl-messageformat-parser)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'file-loader?name=assets/fonts/[name].[ext]'
        },
        {
          test: /\.hbs$/,
          use: 'handlebars-loader'
        }
      ]
    },
    plugins: [
      new LoaderOptionsPlugin({
        options: {
          handlebarsLoader: {}
        }
      }),
      new HtmlWebpackPlugin({
        title: 'Izabela Furdzik Portfolio',
        template: './src/index.hbs',
        favicon: './public/favicon.ico',
        appVersion: `${version}`,
        noscript: 'Proszę włączyć obsługę JavaScript w przeglądarce.',
        appUrl: production ? process.env.APP_URL : 'http://if.portfolio.local:7017',
        base: '/',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          html5: true,
          minifyCSS: true,
          removeComments: false,
          removeEmptyAttributes: true
        }
      }),
      new DefinePlugin({
        NODE_ENV: JSON.stringify(envVariables.NODE_ENV),
        APP_URL: JSON.stringify(envVariables.APP_URL),
        STACKOVERFLOW_API_URL: JSON.stringify(envVariables.STACKOVERFLOW_API_URL),
        STACKOVERFLOW_USER: JSON.stringify(envVariables.STACKOVERFLOW_USER),
        GITHUB_USER: JSON.stringify(envVariables.GITHUB_USER),
        GITHUB_KEY: JSON.stringify(envVariables.GITHUB_KEY),
        SENTRY_DNS: JSON.stringify(envVariables.SENTRY_DNS)
      })
    ]
  }
};
