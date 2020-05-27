export const state = () => ({
  jwtToken: null,
  userName: null,
  role: null
})

export const mutations = {
  setAuth(state: any, auth: any) {
    state.jwtToekn = null
    state.userName = null
    state.rorle = null

    if (auth) {
      // TODO: set state
      state.userName = auth.userName
    }
  },

  clear(state: any) {
    state.jwtToekn = null
    state.userName = null
    state.rorle = null
  }
}

export const getters = {}

export const actions = {
  signIn({ commit, state, dispatch }, { userName, password }) {
    console.log('dispatch auth/signIn', userName, password)
    return new Promise((resolve, reject) => {
      // TODO: dummy auth
      setTimeout(() => {
        commit('setAuth', { userName })
        resolve()
      }, 1000)
    })
  },

  signOut({ commit }) {
    console.log('dispatch auth/signOut')
    commit('clear')
  },

  checkSession({ commit, state, dispatch }, { role, forceCheck }) {
    console.log('dispatch auth/checkSession', role, forceCheck)
  },

  getOtpAuthUri() {
    return new Promise((resolve, reject) => {
      // TODO: dummy auth
      setTimeout(() => {
        resolve("otpauth://totp/Test?secret='123456789'&issuer=DUMMY")
      }, 500)
    })
  },

  verifyCode({ commit, state, dispatch }, { code }) {
    console.log('dispatch auth/verifyCode', code)
    return new Promise((resolve, reject) => {
      // TODO: dummy auth
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }
}
