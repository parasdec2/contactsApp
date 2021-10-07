angular
  .module("app", ["ngRoute", "providers", "oc.lazyLoad"])
  .run(function ($rootScope) {
    $rootScope.loggedIn = false;
    $rootScope.user = null;
    $rootScope.contacts = null;
  });
