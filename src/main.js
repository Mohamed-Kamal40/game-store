import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Details from "./components/Details.vue";
import NotFound from "./components/NotFound.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/details/:id", component: Details },
    { path: "**", component: NotFound },
  ],
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
