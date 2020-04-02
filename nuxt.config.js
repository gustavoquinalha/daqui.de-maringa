export default {
  mode: 'spa',
  plugins: [
    '@/plugins/firebase',
    '@/plugins/firebaseui',
    '@/plugins/sweetalert',
    '@/plugins/fontawesome'
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/firebase',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
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
  pwa: {
    // disable the modules you don't need
    meta: false,
    icon: false,
    // if you omit a module key form configuration sensible defaults will be applied
    // manifest: false,

    workbox: {
      importScripts: [
        // ...
        '/firebase-auth-sw.js'
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: false
    }
  },
  tailwindcss: {
    exposeConfig: true
  },
  loading: {
    color: '#805ad5',
    height: '8px'
  },
  router: {
    linkExactActiveClass: 'active-link',
  }
}
