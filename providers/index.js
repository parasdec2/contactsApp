import authProvider from "./authprovider.js";
import oAuthProvider from "./oAuthprovider.js";
import dbProvider from "./dbProvider.js";

angular
  .module("providers", [])
  .provider("authProvider", authProvider)
  .provider("oAuthProvider", oAuthProvider)
  .provider("dbProvider", dbProvider);
