import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
new Vue({
  el: "#app",
  //vuex 사용시 추가
  store: store,
  render: (h) => h(App),
});
