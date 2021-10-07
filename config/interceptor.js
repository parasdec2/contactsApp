export default function ($httpProvider) {
  $httpProvider.interceptors.push("appInterceptor");
}
