import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../components/common/Dashboard";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      icon: "dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/login",
      icon: "exposure_plus_1",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      icon: "exposure_plus_2",
      name: "Register",
      component: Register
    }
  ]
});
