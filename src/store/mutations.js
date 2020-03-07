const mutations = {
  set_layout(state, payload) {
    state.layout = payload;
  },
  set_left_sidebar(state, payload) {
    state.leftSidebar = payload;
  },
};

export default mutations;
