export default function ($q) {
  return {
    request: function (config) {
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
}
