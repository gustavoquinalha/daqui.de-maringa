export default {
  mode: 'spa',
  plugins: [
    '@/plugins/firebaseui'
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/firebase',
    '@nuxtjs/axios'
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyAZgN8k4fvm_A5BXSx1B8JzHit9InJYDQs",
      authDomain: "servicos-daqui-de.firebaseapp.com",
      databaseURL: "https://servicos-daqui-de.firebaseio.com",
      projectId: "servicos-daqui-de",
      storageBucket: "servicos-daqui-de.appspot.com",
      messagingSenderId: "516425267656",
      appId: "1:516425267656:web:55cdc9eb3af7208482e8fd"
    },
    services: {
      auth: {
        // it is recommended to configure either a mutation or action but you can set both
        initialize: {
          // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: 'onAuthStateChangedAction'
        }
      },
      firestore: true
    }
  },
  tailwindcss: {
    exposeConfig: true
  },
  loading: {
    color: '#805ad5',
    height: '8px'
  }
}
