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
        },
        {
          name: 'Спомагателна силова установка (APU) на Boeing 737',
          created: '25.02.2020, 12:51',
          subject: 'Авиационна техника',
          fileType: 'Тема',
          fileFormat: 'doc',
          author: 'Johnny Depp',
        },
        {
          name: 'Документация - Airbus А550',
          created: '02.03.2020, 22:16',
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
        },
        {
          name: 'Чичовци , авт. Иван Вазов',
          created: '22.02.2020, 21:35',
          subject: 'История на българската литература',
          fileType: 'Безплатна книга или учебник',
          fileFormat: 'doc',
          author: 'Johnny Depp',
        },
        {
          name: 'Писма на един дакел , авт. С. Пенчева',
          created: '24.02.2020, 22:45',
          subject: 'Детска литература',
          fileType: 'Безплатна книга или учебник',
          fileFormat: 'PDF',
          author: 'Johnny Depp',
        },
        {
          name: 'Николай Хайтов - биография и творчество',
          created: '28.02.2020, 12:45',
          subject: 'История на българската литература',
          fileType: 'Презентация',
          fileFormat: 'ppt',
          author: 'Johnny Depp',
        },
        {
          name: 'Увод в общото езикознание - учебник',
          created: '12.03.2020, 12:45',
          subject: 'История на българската литература',
          fileType: 'учебник',
          fileFormat: 'pdf',
          author: 'Johnny Depp',
        },
        {
          name: 'Правопис и пунктуация в българския език - принципи и правила',
          created: '26.03.2020, 22:45',
          subject: 'История на българската литература',
          fileType: 'Безплатна книга или учебник',
          fileFormat: 'doc',
          author: 'Johnny Depp',
        },
        {
          name: 'Чичовци 2, авт. Иван Вазов',
          created: '28.03.2020, 21:35',
          subject: 'История на българската литература',
          fileType: 'Безплатна книга или учебник',
          fileFormat: 'doc',
          author: 'Johnny Depp',
        },
        {
          name: 'Писма на един дакел - съчинение, авт. С. Пенчева',
          created: '03.04.2020, 22:45',
          subject: 'Детска литература',
          fileType: 'съчинение',
          fileFormat: 'PDF',
          author: 'Johnny Depp',
        },
        {
          name: 'Николай Хайтов - творчество',
          created: '28.04.2020, 12:45',
          subject: 'История на българската литература',
          fileType: 'Безплатна книга или учебник',
          fileFormat: 'pdf',
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
