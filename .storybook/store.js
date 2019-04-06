import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import actions from '@/store/actions'

let store = new Vuex.Store({
  actions: actions
})

//  Bind Axios to Store as we don't have access to Nuxt's $axios instance here
store.$axios = axios

export default store
