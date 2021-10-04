import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  deleteUser,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAsHocYcIpuE4rTf6RbhG3KUezpE3dAtBY",
  authDomain: "mean-login-pg.firebaseapp.com",
  projectId: "mean-login-pg",
  storageBucket: "mean-login-pg.appspot.com",
  messagingSenderId: "739846123718",
  appId: "1:739846123718:web:f93fd4775a17d3cc06e7c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GithubAuthProvider();
provider.addScope("read:user");
provider.setCustomParameters({
  allow_signup: "false",
});

const auth = getAuth();

export default function () {
  this.$get = function (authProvider, $rootScope, $location) {
    return {
      githubLogin: function () {
        signInWithPopup(auth, provider)
          .then((result) => {
            // The signed-in user info.
            const userData = {
              id: result.user.uid,
              name: result.user.displayName,
              email: result.user.email,
              authType: "github",
            };
            authProvider.signUp(userData);
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
          });
      },
      deleteUser: function () {
        const user = auth.currentUser;
        deleteUser(user)
          .then((res) => {
            // Sign-out successful.
            // console.log("deleted");
          })
          .catch((error) => {
            // An error happened.
            console.log("Error", error);
          });
      },
      logOut: function () {
        if ($rootScope.user.authType !== "emailPassword") {
          const auth = getAuth();
          signOut(auth)
            .then(() => {
              // // Sign-out successful.
              // console.log("signout");
            })
            .catch((error) => {
              // An error happened.
              console.log("Error", error);
            });
        }
        $rootScope.loggedIn = false;
        $rootScope.user = null;
        $location.url("/");
      },
    };
  };
}
