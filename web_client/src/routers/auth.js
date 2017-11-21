// Auth Containers
import AuthLogin from '@/containers/auth_login'
import AuthRegister from '@/containers/auth_register'

export const AuthLoginRoute = {
  path: '/auth/new',
  component: AuthLogin
}

export const AuthRegisterRoute = {
  path: '/auth',
  component: AuthRegister
}
