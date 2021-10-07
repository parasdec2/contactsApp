angular
  .module("app")
  .controller("signup", function ($scope, authProvider, $location, $rootScope) {
    $scope.nameError = false;
    $scope.emailError = false;
    $scope.passwordError = false;

    function checkValidation(value, type) {
      if (type === "name") {
        if (value.length >= 2) {
          $scope.nameError = false;
          return true;
        }
        $scope.nameError = true;
        return false;
      } else if (type === "email") {
        const re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(value)) {
          $scope.emailError = false;
          return true;
        }
        $scope.emailError = true;
        return false;
      } else if (type === "password") {
        const re = new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        );
        if (re.test(value)) {
          $scope.passwordError = false;
          return true;
        }
        $scope.passwordError = true;
        return false;
      }
    }
    $scope.formData = {};
    $scope.signup = function () {
      if (
        checkValidation($scope.formData.name, "name") &&
        checkValidation($scope.formData.email, "email") &&
        checkValidation($scope.formData.password, "password")
      ) {
        var user = $scope.formData;
        user.authType = "emailPassword";
        authProvider.signUp(user);
      }
    };
  });
