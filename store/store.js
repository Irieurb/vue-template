import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Application"
  },
  getters: {
    getTitle: state => state.title
  },
  actions: {
    CHANGE_APPLICATION_TITLE({ commit, state }, title) {
      commit("SET_APPLICATION_TITLE", title);
    }
  },
  mutations: {
    SET_APPLICATION_TITLE: (state, payload) => {
      state.title = payload;
    }
  }
});
