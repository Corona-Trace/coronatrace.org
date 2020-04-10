// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Buefy from 'buefy'

import '~/styles/main.scss'
import '@mdi/font/css/materialdesignicons.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Register our Bulma component library
  Vue.use(Buefy, {
    defaultIconPack: 'mdi'
  })
}
