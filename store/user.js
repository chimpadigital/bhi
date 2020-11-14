export const state = () => ({
  user: null,
  token: null
})

export const getters = {
  user (state) {
    return state.user
  },
  token (state) {
    return state.token
  }
}

export const actions = {
  logout ({ commit }) {
    commit('SET_USER', null)
    commit('SET_TOKEN', null)
  }
}

export const mutations = {
  SET_USER (state, user) {
    return (state.user = user)
  },
  SET_TOKEN (state, token) {
    return (state.token = token)
  }
}
