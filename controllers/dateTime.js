angular.module("app").controller("dateTime", function ($scope) {
  $scope.showDate = true;
  $scope.showTime = false;
  $scope.showDateTime = false;
  $scope.date = undefined;
  $scope.time = undefined;

  $scope.dt = {
    date: $scope.date?.toLocaleDateString() || "",
    time: $scope.time?.toLocaleTimeString() || "",
  };

  $scope.datePicker = function () {
    $scope.dt.date = $scope.date.toLocaleDateString();
  };

  $scope.timePicker = function () {
    $scope.dt.time = $scope.time.toLocaleTimeString();
  };

  $scope.show = function () {
    if (!!$scope.time) {
      $scope.showTime = false;
      $scope.showDateTime = true;
    } else {
      alert("Select Time");
    }
  };

  $scope.submitDate = function () {
    if (!!$scope.date) {
      $scope.showDate = false;
      $scope.showTime = true;
    } else {
      alert("Select Date");
    }
  };
});
