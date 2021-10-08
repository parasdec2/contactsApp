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
