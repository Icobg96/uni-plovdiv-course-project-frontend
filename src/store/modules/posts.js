import axios from 'axios';

const state = {
  userPosts: null,
  errors: null,
};

const getters = {
  userPosts(state) {
    return state.userPosts;
  },
  errors(state) {
    return state.errors;
  },
};

const mutations = {
  SET_USER_POSTS(state, posts) {
    state.userPosts = posts;
  },
  SET_USER_POST(state, post) {
    state.userPosts.push(post);
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  },
};

const actions = {
  addUserPost(context, postData) {
    axios.post(`${host}/api/post/save`, postData)
      .then((data) => {
        context.commit('SET_USER_POST', data.post);
      })
      .catch((err) => {
        console.log(err);
        context.commit('SET_ERRORS', err);
      });
  },
  getPostsByFilter(context, filterData) {
    return new Promise((resolve, reject) => {
      axios.get(`${host}/api/post/find/by/filter`, filterData)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        context.commit('SET_ERRORS', err);
        reject(error);
      });
    })
  },
  getPostsById(context, postID) {
    return new Promise((resolve, reject) => {
      axios.get(`${host}/api/post/find/by/id`, postID)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        context.commit('SET_ERRORS', err);
        reject(error);
      });
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
