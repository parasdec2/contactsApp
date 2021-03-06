export default function (
  $scope,
  authProvider,
  oAuthProvider,
  $rootScope,
  $location
) {
  if ($rootScope.user !== null) {
    $location.url("/user/dashboard");
    return;
  }
  $scope.formData = {};
  $scope.login = function () {
    var user = $scope.formData;
    user.authType = "emailPassword";
    authProvider.logIn(user);
  };
}
