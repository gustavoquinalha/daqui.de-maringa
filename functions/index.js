// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://servicos-daqui-de.firebaseio.com"
});

// script to set admin user manually
admin.auth().getUserByEmail('lucasfontesgaspareto@gmail.com').then((user) => {
  // Confirm user is verified.
  if (user.emailVerified) {
    // Add custom claims for additional privileges.
    // This will be picked up by the user on token refresh or next sign in on new device.
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: true
    });
  }

  return user
})
.finally((user) => {
  console.log(user)
})
.catch((error) => {
  console.log(error);
});