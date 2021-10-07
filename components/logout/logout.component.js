export default {
  template:
    "<div><button type='submit' class='btn btn-primary'  ng-click='logout()'>Logout</button></div>",
  controller: function ($scope, oAuthProvider) {
    $scope.logout = function () {
      oAuthProvider.logOut();
    };
  },
};
