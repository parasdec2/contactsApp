import deleteUserComponent from "./components/delete/deleteUser.component.js";
import githubLoginComponent from "./components/login/githubLogin.component.js";
import logoutComponent from "./components/logout/logout.component.js";
angular
  .module("app")
  .component("githubLogin", githubLoginComponent)
  .component("logout", logoutComponent)
  .component("deleteUser", deleteUserComponent);
