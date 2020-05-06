import Vue from 'vue';
import Vuex from 'vuex';
import layouts from './modules/layouts';
import authentication from './modules/authentication';
// import createLogger from '../plugins/logger'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    layouts,
    authentication,
  },
  strict: debug,
  plugins: debug ? [/* createLogger() */] : [],
});
