import Vue from 'vue'
import axios from 'axios'
import _ from 'lodash'
import {Model} from 'vue-mc'

// TODO - REMOVE THIS BLOCK
window.Vue = Vue
window._ = _
window.axios = axios

// // // //

// Authenticator definition
class Authenticator extends Model {
  // Default attributes that define the "empty" state.
  defaults () {
    return {
      username: '',
      password: ''
    }
  }

  // Route configuration
  routes () {
    return {
      save: '/api/auth/login'
    }
  }
}

// // // //

// Registrar definition
class Registrar extends Model {
  // Default attributes that define the "empty" state.
  defaults () {
    return {
      username: '',
      password: ''
    }
  }

  // Route configuration
  routes () {
    return {
      save: '/api/auth/register'
    }
  }
}

// // // //

export default { Authenticator, Registrar }
