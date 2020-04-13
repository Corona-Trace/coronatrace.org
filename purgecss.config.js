module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './dist/**/*.html',
    './dist/assets/js/*.js'
  ],
  css: ['./dist/assets/css/*.css'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  whitelistPatterns: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!cursor-move).+-move$/,
    /^router-link(|-exact)-active$/,
    /^g-link.+/
  ],
  rejected: true,
  variables: true,
  keyframes: true,
