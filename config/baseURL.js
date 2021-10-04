export default [
  "authProviderProvider",
  "dbProviderProvider",
  function (authProviderProvider, dbProviderProvider) {
    authProviderProvider.setBaseURL("http://localhost:8000/api");
    dbProviderProvider.setBaseURL("http://localhost:8000/api");
  },
];
