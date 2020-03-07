import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: 'left-sidebar-layout',
    leftSidebar: '',
    users: [
      {
        name: 'Ivan Ivanov',
        image: 'avatar-0.jpg',
      },
      {
        name: 'Stoyan Stoyanov',
        image: 'avatar-1.jpg',
      },
      {
        name: 'Dimitri Dimitrov',
        image: 'avatar-2.jpg',
      },
      {
        name: 'Stoicho Ivanov',
        image: 'avatar-3.jpg',
      },
      {
        name: 'Georgi Stoyanov',
        image: 'avatar-4.jpg',
      },
      {
        name: 'Ivan Dimitrov',
        image: 'avatar-5.jpg',
      },
    ],
  },
  mutations,
  getters,
  actions: {},
});
