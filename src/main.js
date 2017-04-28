// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import createPersistedState from 'vuex-persistedstate'

export const eventBus = new Vue();

Vue.use(VueAxios, axios)

// Vue.axios.defaults.baseURL = 'https://vuejs-stock-trader-14b84.firebaseio.com/';

Vue.axios.defaults.baseURL = 'http://cuddly-robot-api.herokuapp.com/api/companies/';

// Vue.axios.defaults.baseURL = 'https://ca-pm-c4cf3.firebaseio.com/';

import store from './store/store';
// Vue.filter('currency', (value) => {
//   return '$' + value.toLocaleString();
// });

// Attempt to use more axios tools
// export const axiosExp = axios.get({
//   baseURL: 'http://cuddly-robot-api.herokuapp.com/api/companies/',
//   headers: {'X-Requested-With': 'XMLHttpRequest'},
//   params: { id: 3 },
//   data: { company: { name: 'newName' } },
//   responseType: 'json',
//   validateStatus: function(status) {
//     return status;
//   }
// });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
