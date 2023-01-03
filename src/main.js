import Vuex from "vuex";
import Vue from "vue";
import App from "./App";
import store from "./store";

Vue.use(Vuex);

new Vue({
  store: store,
  render: h => h(App)
}).$mount("#app");

Vue.prototype.$store = store;

export default store;