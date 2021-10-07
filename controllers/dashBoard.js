angular.module("app").controller(
  "dashboard",

  function ($scope, $rootScope, $location, dbProvider) {
    if (!$rootScope.loggedIn && $rootScope.user === null) {
      $location.url("/login");
      return;
    } else {
      $scope.showEditForm = false;
      $scope.cName = "";
      $scope.cEmail = "";
      $scope.cPhone = "";
      $scope.cId = "";
      $scope.user = $rootScope.user;
      $scope.allContacts = $rootScope.contacts?.filter((e) => e != null) || [];
      $scope.formData = {};
      $scope.sortColumn = "name";
      $scope.reverseSort = false;

      $scope.sortBy = function (column) {
        $scope.reverseSort =
          $scope.sortColumn == column ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
      };

      $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column)
          return $scope.reverseSort ? "arrow-down" : "arrow-up";
        return "";
      };

      $scope.addContact = function () {
        $scope.formData["id"] = $scope.user._id;
        dbProvider.addContact($scope.formData).then((contacts) => {
          $scope.allContacts = contacts.filter((e) => e != null);
          $scope.formData = {};
        });
      };
      $scope.refreshContacts = function () {
        dbProvider.getAllContacts().then((res) => {
          $scope.allContacts = res.filter((e) => e != null);
        });
      };
      $scope.deleteContact = function (id) {
        if (confirm("Do you want to delete this contact?")) {
          dbProvider.deleteContact(id).then((res) => {
            if (res === 200) {
              $scope.allContacts = $scope.allContacts.filter(
                (e) => e._id !== id
              );
            }
          });
        }
      };

      $scope.editContact = function (contact) {
        $scope.cName = contact?.name || "";
        $scope.cEmail = contact?.email || "";
        $scope.cMobile = contact.mobile;
        $scope.cId = contact._id;
        $scope.showEditForm = true;
      };

      $scope.cancelUpdate = function () {
        $scope.cName = "";
        $scope.cEmail = "";
        $scope.cPhone = "";
        $scope.cId = "";
        $scope.showEditForm = false;
      };

      $scope.updateContact = function () {
        var updatedContact = {
          name: $scope.cName,
          email: $scope.cEmail,
          mobile: $scope.cMobile,
        };
        dbProvider
          .updateContact(updatedContact, $scope.cId)
          .then((contacts) => {
            $scope.cName = "";
            $scope.cEmail = "";
            $scope.cPhone = "";
            $scope.cId = "";
            $scope.showEditForm = false;
            $scope.allContacts = contacts.filter((e) => e != null);
          });
      };

      $scope.closeModal = function () {
        $scope.showEditForm = false;
      };
    }
  }
);
