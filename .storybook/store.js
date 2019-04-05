import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import actions from '@/store/actions'

let store = new Vuex.Store({
  actions: actions
})

//  Bind Axios to Store as we don't have access to Nuxt's $axios instance here
store.$axios = axios

//  Remap Axios's methods to make use of $ symbol within the store's actions so we don't re-write our axios' calls
store.$axios.$get = store.$axios.get
store.$axios.$post = store.$axios.post

export default store
