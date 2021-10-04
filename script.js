import deleteUserComponent from "./components/delete/deleteUser.component.js";
import githubLoginComponent from "./components/login/githubLogin.component.js";
import logoutComponent from "./components/logout/logout.component.js";
import { baseUrl, routeConfig, interceptor } from "./config/index.js";
import { dashBoard, login, signUp } from "./controllers/index.js";
import appInterceptor from "./interceptors/interceptor.js";

angular
  .module("app", ["ngRoute", "providers"])
  .factory("appInterceptor", appInterceptor)
  .config(interceptor)
  .config(baseUrl)
  .config(routeConfig)
  .component("githubLogin", githubLoginComponent)
  .component("logout", logoutComponent)
  .component("deleteUser", deleteUserComponent)
  .controller("login", login)
  .controller("signup", signUp)
  .controller("dashboard", dashBoard)
  .run(function ($rootScope) {
    $rootScope.loggedIn = false;
    $rootScope.user = null;
    $rootScope.contacts = null;
  });
