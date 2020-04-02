import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const state = () => ({
  services: [],
  authUser: {}
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
      isAdmin: claims.custom_claim
    })
  }
}

export const getters = {
  count(state) {
    return state.countDocument.count
  },
  services(state) {
    return [...state.services]
  }
}