angular
  .module("app")
  .factory("appInterceptor", function ($q) {
    return {
      request: function (config) {
        console.log(config);
        return config;
      },

      requestError: function (config) {
        return $q.reject(config);
      },

      response: function (res) {
        return res;
      },

      responseError: function (res) {
        return $q.reject(res);
      },
    };
  })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push("appInterceptor");
  });
