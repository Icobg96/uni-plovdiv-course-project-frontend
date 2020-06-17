const state = {
  library: {
    categories: [
      {
        name: 'Авиационна и космическа техника',
        files: [{
          name: 'Документация - Airbus А320',
          created: '29.05.2019, 20:06',
          subject: 'Летателни апарати',
          fileType: 'Други',
          fileFormat: 'PDF',
          author: 'Dwayne Johnson',
        }],
      },
      {
        name: 'Български език и литература',
        files: [{
          name: 'Немили - недраги , авт. Иван Вазов',
          created: '21.02.2020, 22:45',
          subject: 'История на българската литература',
          fileType: 'Безплатна книга или учебник',
          fileFormat: 'PDF',
          author: 'Johnny Depp',
        }],
      },
      {
        name: 'Висша математика',
        files: [{
          name: 'Декартово произведение на множества',
          created: '31.03.2020, 17:01',
          subject: 'Висша математика',
          fileType: 'Тема',
          fileFormat: 'DOC',
          author: 'Scarlett Johansson',
        }],
      },
    ],
  },
};

const getters = {
  library(state) {
    return state.library;
  },
};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
