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
