export default [
  "authProviderProvider",
  "dbProviderProvider",
  function (authProviderProvider, dbProviderProvider) {
    authProviderProvider.setBaseURL(
      "https://contacts-server-pg.herokuapp.com/api"
    );
    dbProviderProvider.setBaseURL(
      "https://contacts-server-pg.herokuapp.com/api"
    );
  },
];
