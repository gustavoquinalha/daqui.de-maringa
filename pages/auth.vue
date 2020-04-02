<template>
  <div>
    <h1 class="text-5xl">Auth</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import * as firebaseui from 'firebaseui'

export default {
  mounted() {
    // FirebaseUI config.
    var uiConfig = {
      signInSuccessUrl: '/app',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        this.$fireAuthObj.GoogleAuthProvider.PROVIDER_ID,
        // this.$fireAuthObj.FacebookAuthProvider.PROVIDER_ID,
        // this.$fireAuthObj.TwitterAuthProvider.PROVIDER_ID,
        // this.$fireAuthObj.GithubAuthProvider.PROVIDER_ID,
        this.$fireAuthObj.EmailAuthProvider.PROVIDER_ID,
        // this.$fireAuthObj.PhoneAuthProvider.PROVIDER_ID,
        // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: '<your-tos-url>',
      // Privacy policy url/callback.
      privacyPolicyUrl: function() {
        window.location.assign('<your-privacy-policy-url>');
      }
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(this.$fireAuth);
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  }
}
</script>

<style>
</style>
