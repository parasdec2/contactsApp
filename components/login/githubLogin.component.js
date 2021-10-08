angular.module("app").component("githubLogin", {
  template:
    "<hr /><h5>Or Signin with your Github Account</h5><button type='submit' class='btn btn-primary' ng-click='githubLogin()'>Github Login  </button>",
  controller: function ($scope, oAuthProvider) {
    $scope.githubLogin = function () {
      oAuthProvider.githubLogin();
    };
  },
});
