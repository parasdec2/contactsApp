export default function ($routeProvider) {
  $routeProvider.when("/login", {
    templateUrl: "/templates/login.html",
    controller: "login",
  });
  $routeProvider.when("/signup", {
    templateUrl: "/templates/signup.html",
    controller: "signup",
  });
  $routeProvider.when("/user/dashboard", {
    templateUrl: "/templates/dashboard.html",
    controller: "dashboard",
  });
  $routeProvider.when("/", {
    redirectTo: "/login",
  });
  $routeProvider.otherwise({
    redirectTo: "/",
  });
}
