import AuthFactory from './factory'

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {

  authenticate: ({ commit }, data) => {
    // State.fetching = true
    commit('fetching', true)

    // Fetches Collection from the server
    // TODO - This could be replaced with the Fetch API, instead of VueMC
    // TODO - this _should_ be abstracted into AuthFactory?
    AuthFactory.requestAuthenticator(data).save().then((response) => {
      // State.fetching = false
      commit('fetching', false)
    })
  },

  register: ({ commit }, data) => {
    // State.fetching = true
    commit('fetching', true)

    // Fetches Collection from the server
    // TODO - This could be replaced with the Fetch API, instead of VueMC
    // TODO - this _should_ be abstracted into AuthFactory?
    AuthFactory.requestRegistrar(data).save().then((response) => {
      // State.fetching = false
      commit('fetching', false)
    })
  }
}

// // // //

export default actions
