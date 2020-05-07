// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '@mdi/font/scss/materialdesignicons.scss'
import Buefy from 'buefy'
import '~/styles/main.scss'
import Vuex from 'vuex'
import Components from './components'

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // registering the components
  Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key])
  })

  // Register our Bulma component library
  Vue.use(Buefy, {
    defaultIconPack: 'mdi'
  })

  appOptions.store = new Vuex.Store({
    state: {
      emailModalActive: false
    },
    getters: {
      emailModalActive: (state, getters, rootState) => {
        return state.emailModalActive
      }
    },
    mutations: {
      openModal(state) {
        state.emailModalActive = true
      },
      closeModal(state) {
        state.emailModalActive = false
      }
    },
    actions: {
      toggleEmailModal({ state, commit }) {
        const emailModalActive = state.emailModalActive

        if (emailModalActive) {
          commit('closeModal')
        } else {
          commit('openModal')
        }
      }
    }
  })
}
