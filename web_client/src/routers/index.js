import Vue from 'vue'
import Router from 'vue-router'

// Module routes
import { MainHomeRoute } from './main'
import { WalletListRoute, WalletNewRoute } from './wallet'
import { AuthLoginRoute, AuthRegisterRoute } from './auth'
import { UserListRoute, UserShowRoute } from './user'
import { ProjectListRoute, ProjectShowRoute, ProjectNewRoute, ProjectEditRoute } from './project'
import { DeviceListRoute, DeviceShowRoute, DeviceNewRoute, DeviceEditRoute } from './device'
import { DeviceTypeListRoute, DeviceTypeShowRoute, DeviceTypeNewRoute, DeviceTypeEditRoute } from './device_type'
import { BootListRoute, BootShowRoute, BootNewRoute, BootEditRoute } from './boot'

// Vue Router setup
Vue.use(Router)

// Exports new Router instance
export default new Router({
  routes: [
    BootListRoute,
    BootNewRoute,
    BootShowRoute,
    BootEditRoute,
    MainHomeRoute,
    WalletListRoute,
    WalletNewRoute,
    AuthLoginRoute,
    AuthRegisterRoute,
    UserListRoute,
    UserShowRoute,
    ProjectListRoute,
    ProjectShowRoute,
    ProjectNewRoute,
    ProjectEditRoute,
    DeviceListRoute,
    DeviceNewRoute,
    DeviceShowRoute,
    DeviceEditRoute,
    DeviceTypeListRoute,
    DeviceTypeNewRoute,
    DeviceTypeShowRoute,
    DeviceTypeEditRoute
  ]
})
