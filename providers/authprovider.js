export default function () {
  var baseURL = "";

  this.setBaseURL = function (url) {
    baseURL = url;
  };

  this.$get = function ($http, $rootScope, $location) {
    return {
      logIn: function (user) {
        var req = {
          method: "POST",
          url: `${baseURL}/signin`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: JSON.stringify(user),
        };
        $http(req)
          .then((res) => {
            if (res.status === 200) {
              $rootScope.loggedIn = true;
              $rootScope.user = res?.data?.user;
              $rootScope.contacts = res?.data?.contacts?.contacts?.contacts;
              $location.url("/user/dashboard");
            } else {
              throw new Error(res);
            }
          })
          .catch((err) => {
            if (err.status === 400) {
              alert(err.data.error);
            } else if (err.status === 401) {
              alert(err.data.error);
            } else {
              alert("Some error");
            }
          });
      },
      signUp: function (user) {
        var req = {
          method: "POST",
          url: `${baseURL}/signup`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: JSON.stringify(user),
        };
        $http(req)
          .then((res) => {
            if (res.status === 200) {
              $rootScope.loggedIn = true;
              $rootScope.user = res?.data?.user;
              $rootScope.contacts = res?.data?.contacts?.contacts?.contacts;
              $location.url("/user/dashboard");
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
    };
  };
}
