// 引入资源
import Vue from "vue";

// 引入路由资源
import Home from "./components/Home/Home.vue";
import App from "./components/App.vue";

// 配置路由
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter();
router.addRoutes([
  // 重定向
  {
    path: "/", redirect: {
      name: "home"
    }
  },
  { name: "home", path: "/home", component: Home }
]);

// Mint-Ui
import MintUi from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUi);

// Axios
import Axios from "axios";
Vue.prototype.$axios = Axios;
// 设置默认基础地质
Axios.defaults.baseURL = "http://vue.studyit.io/api/";

new Vue({
  el: "#app",
  render: c => c(App),
  router
})