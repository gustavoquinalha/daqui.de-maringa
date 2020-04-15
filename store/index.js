import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const state = () => ({
  services: [],
  authUser: {},
  setting: {}
})

export const mutations = {
  ...vuexfireMutations,

  SET_AUTH_USER(state, authUser) {
    state.authUser = authUser
  }
}

export const actions = {
  bindServices: firestoreAction(async function({ bindFirestoreRef }) {
    const ref = this.$fireStore
      .collection('services')
      
    await bindFirestoreRef('services', ref, { wait: true })
  }),

  bindSetting: firestoreAction(async function({ bindFirestoreRef }) {
    const ref = this.$fireStore
      .collection('settings').doc('default')
      
    await bindFirestoreRef('setting', ref, { wait: true })
  }),

  cleanupAction: firestoreAction(async function({ unbindFirestoreRef }) {
    const ref = this.$fireStore
      .collection('services')
      
    await unbindFirestoreRef('services', ref, { wait: true })
  }),
  
  async onAuthStateChangedAction({ commit, dispatch }, { authUser, claims }) {
    if (!authUser) {
      await dispatch('cleanupAction')
  
      return
    }
  
    // you can request additional fields if they are optional (e.g. photoURL)
    const { uid, email, emailVerified, displayName, photoURL } = authUser
  
    commit('SET_AUTH_USER', {
      uid,
      email,
      emailVerified,
      displayName,
      photoURL, // results in photoURL being undefined for server auth
      // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
      isAdmin: claims.admin
    })
  }
}

export const getters = {
  services(state) {
    return [...state.services]
  },
  setting(state) {
    return state.setting
  },
  settingTags(state) {
    return state.setting.tags && state.setting.tags.map(tag => ({ name: tag.name, status: false })) || []
  },
  settingDeliveries(state) {
    return state.setting.delivery && state.setting.delivery.map(delivery => ({ name: delivery.name, status: false })) || []
  },
  isLogged(state) {
    return state.authUser && state.authUser.uid
  }
}