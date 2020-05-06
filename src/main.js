import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import store from './store/index';
import router from './router';
import './assets/scss/app.scss';
import 'bootstrap';
import '@fortawesome/fontawesome-free';

Vue.config.productionTip = false;

new Vue({
  created() {
    const userString = localStorage.getItem('user');
    if (userString) {
      const userData = JSON.parse(userString);
      axios.post('/isUser', userData.id) // check if the user from localstorage is real (to avoid fake hardcore written data)
        .then((data) => {
          if (data.status === '200') {
            this.$store.commit('SET_USER_DATA', userData); // if success set the user
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$store.dispatch('authentication/logout');
        }
        return Promise.reject(error);
      },
    );
  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
