module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './dist/**/*.html',
    './dist/assets/js/*.js',
    './dist/assets/fonts/*'
  ],
  css: ['./dist/assets/css/*.css'],
  defaultExtractor: content => {
    const contentWithoutStyleBlocks = content.replace(
      /<style[^]+?<\/style>/gi,
      ''
    )
    return (
      contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    )
  },
  whitelistPatterns: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!cursor-move).+-move$/,
    /^router-link(|-exact)-active$/,
    /^g-link.+/
  ],
  rejected: true,
  variables: true,
  whitelistPatterns: [/\.mdi.*/]
}
