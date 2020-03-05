import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: 'left-sidebar-layout',
  },
  mutations,
  getters,
  actions: {},
});
