import * as firebaseui from 'firebaseui'

export default (context, inject) => {
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(context.app.$fireAuth);
  // The start method will wait until the DOM is loaded.

  inject('firebaseui', ui)
}