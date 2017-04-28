import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';

import companies from './modules/companies';
import offices from './modules/offices';
import portfolio from './modules/portfolio';

import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    companies: [],
    company: {},
    offices: [],
    office: {}
  },
  actions,
  modules: {
    companies,
    offices,
    portfolio,
  },
  plugins: [
    createPersistedState({
      getState(key) {
        const storedState = window.localStorage.getItem(key);
        if (!storedState) return {};
        const state = storedState;
        return JSON.parse(state);
      },
      setState(key, state) {
        const stateJSON = JSON.stringify(state);
        return window.localStorage.setItem(key, stateJSON);
      },
    }),
  ],
})

export default store;
