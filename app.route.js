angular.module("app").config(function ($routeProvider) {
  $routeProvider.when("/dateTimePicker", {
    templateUrl: "/templates/dateTime.html",
    controller: "dateTime",
    resolve: {
      LazyLoadCtrl: [
        "$ocLazyLoad",
        function ($ocLazyLoad) {
          return $ocLazyLoad.load("dateTimeCtrl"); // Resolve promise and load before view
        },
      ],
    },
  });
  $routeProvider.when("/login", {
    templateUrl: "/templates/login.html",
    controller: "login",
    resolve: {
      LazyLoadCtrl: [
        "$ocLazyLoad",
        function ($ocLazyLoad) {
          return $ocLazyLoad.load("loginCtrl"); // Resolve promise and load before view
        },
      ],
    },
  });
  $routeProvider.when("/signup", {
    templateUrl: "/templates/signup.html",
    controller: "signup",
    resolve: {
      LazyLoadCtrl: [
        "$ocLazyLoad",
        function ($ocLazyLoad) {
          return $ocLazyLoad.load("signupCtrl"); // Resolve promise and load before view
        },
      ],
    },
  });
  $routeProvider.when("/user/dashboard", {
    templateUrl: "/templates/dashboard.html",
    controller: "dashboard",
    resolve: {
      LazyLoadCtrl: [
        "$ocLazyLoad",
        function ($ocLazyLoad) {
          return $ocLazyLoad.load("dashboardCtrl"); // Resolve promise and load before view
        },
      ],
    },
  });

  $routeProvider.when("/", {
    redirectTo: "/login",
  });
  $routeProvider.otherwise({
    redirectTo: "/",
  });
});
