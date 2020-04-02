<template>
  <div>
    <div id="firebaseui-auth-container"></div>
    <div v-if="Object.keys(authUser || {}).length">
      <div>{{ authUser }}</div>
      <button @click="signOut">SignOut</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['authUser'])
  },
  async mounted() {
    try {

      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: '/app',
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
  },
  methods: {
    async signOut() {
      try {
        const logout = await this.$fireAuth.signOut()
        console.log(logout)
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
}
</script>

<style>
</style>
