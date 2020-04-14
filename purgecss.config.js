module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.scss',
    './dist/**/*.html',
    './node_modules/buefy/carousel/*.(vue|js)',
    './node_modules/buefy/dropdown/*.(vue|js)',
    './node_modules/buefy/field/*.(vue|js)',
    './node_modules/buefy/modal/*.(vue|js)',
    './node_modules/buefy/navbar/*.(vue|js)',
    './node_modules/buefy/message/*.(vue|js)',
    './node_modules/buefy/input/*.(vue|js)',
    './node_modules/buefy/select/*.(vue|js)',
    './node_modules/v-lazy-image/dist/*.js',
    './node_modules/bulma-scss/components/_modal.scss',
    './node_modules/bulma-scss/components/_message.scss',
    './node_modules/bulma-scss/components/_dropdown.scss',
    './node_modules/bulma-scss/form/*.scss'
  ],
  css: ['./dist/assets/css/*.css'],
  whitelistPatterns: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!cursor-move).+-move$/,
    /^router-link(|-exact)-active$/,
    /^g-link.+/
  ],
  whitelistPatternsChildren: [/^modal.*/, /^is-active.*/, /^email-signup.*/],
  rejected: true,
  keyframes: true,
  variables: true
}
