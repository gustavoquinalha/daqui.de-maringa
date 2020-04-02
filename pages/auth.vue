<template>
  <div>
    <h1 class="text-5xl">Auth</h1>
    <div id="firebaseui-auth-container"></div>
    <div>{{ $store.state.authUser}}</div>
    <p class="count">{{ count }}</p>
    <div class="links">
      <div class="button--green" @click="changeCount(-1)">-1</div>
      <div class="button--green" @click="changeCount(1)">+1</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['count'])
  },
  async mounted() {
    try {
      // Binds it on client-side
      await this.bindCountDocument()

      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: '/auth',
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
          window.location.assign('<your-privacy-policy-url>')
        }
      }
      
      this.$firebaseui.start('#firebaseui-auth-container', uiConfig)
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    ...mapActions(['bindCountDocument']),
    
    changeCount(amount) {
      const increment = this.$fireStoreObj.FieldValue.increment(amount)
      this.$fireStore
        .collection('countCollection')
        .doc('countDocument')
        .update({ count: increment })
    }
  }
}
</script>

<style>
</style>
