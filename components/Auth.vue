<template>
  <div id="firebaseui-auth-container"></div>
</template>


<script>
export default {
  async mounted() {
    try {
      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: this.$route.path, // redirect to the same path where component are imported
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          this.$fireAuthObj.GoogleAuthProvider.PROVIDER_ID,
          // this.$fireAuthObj.FacebookAuthProvider.PROVIDER_ID,
          // this.$fireAuthObj.TwitterAuthProvider.PROVIDER_ID,
          // this.$fireAuthObj.GithubAuthProvider.PROVIDER_ID,
          // this.$fireAuthObj.EmailAuthProvider.PROVIDER_ID,
          // this.$fireAuthObj.PhoneAuthProvider.PROVIDER_ID,
          // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '<your-tos-url>',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
          window.location.assign('<your-privacy-policy-url>')
        }
      }
      
      this.$firebaseui.start('#firebaseui-auth-container', uiConfig)
    } catch (e) {
      this.$swal({
        icon: 'error',
        showConfirmButton: false,
        showCancelButton: true,
        title: 'error',
        text: error.message
      })
    }
  }
}
</script>

<style>

</style>
