module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './dist/**/*.html',
    './dist/assets/js/*.js'
  ],
  css: ['./dist/assets/css/*.css'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  rejected: true,
  variables: true
}
