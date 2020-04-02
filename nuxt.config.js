export default {
  mode: 'spa',
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/firebase'
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
      auth: true
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
