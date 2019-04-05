import Vue from 'vue'
import Vuex from 'vuex'

import { configure } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import '@/assets/css/tailwind.css'

Vue.use(Vuex)

Vue.component('nuxt-link', {
  props:   ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
