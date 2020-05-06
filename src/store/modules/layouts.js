const state = {
  layout: 'left-sidebar-layout',
  leftSidebar: '',
};

// getters
const getters = {
  layout(state) {
    return state.layout;
  },

  leftSidebar(state) {
    return state.leftSidebar;
  },
};

// actions
const actions = {};

// mutations
const mutations = {
  SET_LAYOUT(state, payload) {
    state.layout = payload;
  },

  SET_LEFT_SIDEBAR(state, payload) {
    state.leftSidebar = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
