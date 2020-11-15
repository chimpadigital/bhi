export const state = () => ({
  user: null,
  token: null,
  role: null
})

export const getters = {
  user (state) {
    return state.user
  },
  token (state) {
    return state.token
  },
  role (state) {
    return state.role
  }
}

export const actions = {
  logout ({ commit }) {
    commit('SET_USER', null)
    commit('SET_TOKEN', null)
    commit('SET_ROLE', null)
  }
}

export const mutations = {
  SET_USER (state, user) {
    return (state.user = user)
  },
  SET_TOKEN (state, token) {
    return (state.token = token)
  },
  SET_ROLE (state, role) {
    return (state.role = role)
  }
}
