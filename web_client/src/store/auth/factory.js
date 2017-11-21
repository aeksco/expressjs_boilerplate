import Entities from './entities'

// TODO - abstract into BaseFactory class?
export default {
  requestAuthenticator: (data) => {
    return new Entities.Authenticator(data)
  },
  requestRegistrar: (data) => {
    return new Entities.Registrar(data)
  }
}
