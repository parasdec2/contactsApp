export default function () {
  var baseURL = "";

  this.setBaseURL = function (url) {
    baseURL = url;
  };

  this.$get = function ($http, $rootScope, $location, oAuthProvider) {
    return {
      addContact: function (contact) {
        var req = {
          method: "POST",
          url: `${baseURL}/contact/add`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: JSON.stringify(contact),
        };
        return $http(req)
          .then((res) => {
            if (res.status === 200) {
              return res.data.contacts;
            } else {
              throw new Error(res);
            }
          })
          .catch((err) => {
            if (err.status === 400) {
              alert("User with this email id already registered");
            } else {
              alert("Some error");
            }
          });
      },
      getAllContacts: function () {
        var req = {
          method: "GET",
          url: `${baseURL}/contacts/${$rootScope.user._id}`,
        };
        return $http(req)
          .then((res) => {
            return res.data.contacts;
          })
          .catch((err) => console.log(err));
      },
      deleteContact: function (id) {
        var uid = {
          id1: $rootScope.user._id,
          id2: id,
        };
        var req = {
          method: "DELETE",
          url: `${baseURL}/contact/delete`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: JSON.stringify(uid),
        };
        return $http(req)
          .then((res) => {
            if (res.status === 200) {
              return res.status;
            } else {
              throw new Error(res);
            }
          })
          .catch((err) => {
            if (err.status === 400) {
              alert("User with this email id already registered");
            } else {
              alert("Some error");
            }
          });
      },
      updateContact: function (contact, id) {
        var data = {
          id1: $rootScope.user._id,
          id2: id,
          contact: contact,
        };
        var req = {
          method: "PUT",
          url: `${baseURL}/contact/updateContact`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: JSON.stringify(data),
        };
        return $http(req)
          .then((res) => {
            if (res.status === 200) {
              return res.data.contacts;
            } else {
              throw new Error(res);
            }
          })
          .catch((err) => {
            if (err.status === 400) {
              alert("User with this email id already registered");
            } else {
              alert("Some error");
            }
          });
      },
      deleteUser: function (id) {
        var userId = { id };
        var req = {
          method: "DELETE",
          url: `${baseURL}/user/delete`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: JSON.stringify(userId),
        };
        $http(req)
          .then((res) => {
            if ($rootScope.user.authType !== "emailPassword") {
              oAuthProvider.deleteUser();
              $rootScope.user = null;
              $rootScope.loggedIn = false;
              alert("Successfully Deleted your account");
              $location.url("/");
            } else {
              $rootScope.user = null;
              $rootScope.loggedIn = false;
              alert("Successfully Deleted your account");
              $location.url("/");
            }
          })
          .catch((err) => {
            alert("Error occured while Deleting your account");
          });
      },
    };
  };
}
