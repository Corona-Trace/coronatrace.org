// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(
          __dirname,
          './node_modules/bulma-scss/utilities/_variables.scss'
        ),
        path.resolve(__dirname, './src/styles/main.scss'),
        path.resolve(__dirname, './node_modules/bulma-scss/utilities/_all.scss')
      ]
    })
}

module.exports = {
  siteName: 'Corona Trace',
  siteDescription:
    'CoronaTrace is a platform to facilitate decentralized contact tracing for confirmed Covid-19 patients.',
  siteUrl: 'https://www.coronatrace.org',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      use: '~/src/sources/contributors',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        base: process.env.AIRTABLE_BASE
      }
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        policy: [
          {
            userAgent: '*',
            disallow: ['/donate', '/faqs']
          }
        ]
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/donate', '/faqs']
      }
    },
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'ns2fx9vns4i8', // required
        accessToken: 'GxR06QUAejxt5g87V8G5eXRJqXqaboECVhG_prQejH8' // required
      }
    }
  ],

  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })

    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
