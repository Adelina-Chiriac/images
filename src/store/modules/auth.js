const state = {
  token: null
};

const getters = {
  isLoggedIn: function(state) {
    return !!state.token
  }
};

const actions = {
  logout: function({ commit }) {
    commit("setToken", null);
  }
};

const mutations = {
  setToken: function(state, token) {
    state.token = token;
  }
};