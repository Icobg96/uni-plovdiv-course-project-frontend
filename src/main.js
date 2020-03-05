import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router';
import './assets/scss/app.scss';
import 'bootstrap';
import '@fortawesome/fontawesome-free';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
