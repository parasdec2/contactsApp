angular
  .module("app", ["ngRoute", "providers", "oc.lazyLoad"])
  .run(function ($rootScope) {
    $rootScope.loggedIn = false;
    $rootScope.user = null;
    $rootScope.contacts = null;
  });

angular.module("app").config([
  "$ocLazyLoadProvider",
  function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      modules: [
        {
          name: "dashboardCtrl",
          files: ["./controllers/dashboard.js"],
        },
        {
          name: "loginCtrl",
          files: ["./controllers/login.js"],
        },
        {
          name: "signupCtrl",
          files: ["./controllers/signup.js"],
        },
        {
          name: "dateTimeCtrl",
          files: ["./controllers/dateTime.js"],
        },
      ],
    });
  },
]);

angular
  .module("app")
  .factory("appInterceptor", function ($q) {
    return {
      request: function (config) {
        console.log(config);
        return config;
      },

      requestError: function (config) {
        return $q.reject(config);
      },

      response: function (res) {
        return res;
      },

      responseError: function (res) {
        return $q.reject(res);
      },
    };
  })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push("appInterceptor");
  });

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

angular.module("app").config([
  "authProviderProvider",
  "dbProviderProvider",
  function (authProviderProvider, dbProviderProvider) {
    authProviderProvider.setBaseURL(
      "https://contacts-server-pg.herokuapp.com/api"
    );
    dbProviderProvider.setBaseURL(
      "https://contacts-server-pg.herokuapp.com/api"
    );
  },
]);

angular.module("app").component("deleteUser", {
  template:
    "<div><button type='submit' class='btn btn-primary'  ng-click='delete()'>Delete Account</button></div>",
  controller: function ($scope, $rootScope, dbProvider) {
    $scope.delete = function () {
      if (confirm("Do you want to delete your contact ?"))
        dbProvider.deleteUser($rootScope.user._id);
    };
  },
});

angular.module("app").component("githubLogin", {
  template:
    "<hr /><h5>Or Signin with your Github Account</h5><button type='submit' class='btn btn-primary' ng-click='githubLogin()'>Github Login  </button>",
  controller: function ($scope, oAuthProvider) {
    $scope.githubLogin = function () {
      oAuthProvider.githubLogin();
    };
  },
});

angular.module("app").component("logout", {
  template:
    "<div><button type='submit' class='btn btn-primary'  ng-click='logout()'>Logout</button></div>",
  controller: function ($scope, oAuthProvider) {
    $scope.logout = function () {
      oAuthProvider.logOut();
    };
  },
});
