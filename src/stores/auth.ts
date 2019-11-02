import Vue from "vue";
import Vuex, { Module } from "vuex";

Vue.use(Vuex);

interface AuthStore {
  loading: boolean;
  success: boolean;
  token?: string;
  username?: string;
}

const store: Module<AuthStore, AuthStore> = {
  namespaced: true,
  state: {
    loading: false,
    success: false
  },
  mutations: {
    LOGIN_REQUEST(state, payload: { username: string; password: string }) {
      if (payload.username && payload.password) {
        state.username = payload.username;
        state.loading = true;
      } else {
      }
    }
  },
  actions: {
    login(context, { username, password }) {
      context.commit("SET_LOADING_STATUS", true);
    }
  }
};

export default store;
