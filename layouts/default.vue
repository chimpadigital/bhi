<template>
  <div>
    <nuxt />

    <Overlay v-if="overlay" />
    <ModalLogin v-if="login" />
    <ModalRecovery v-if="recovery" />
    <ModalCreateAccount v-if="createAccount" :create="create" />
    <ModalConfirmation v-if="confirmation" />
    <ModalSuccess v-if="success" />
    <ModalAdminAction v-if="adminAction" :add="add" :agency="agency" />
    <ModalEditAccount v-if="editAccount" :password="epassword" />
  </div>
</template>
<script>
import Overlay from '~/components/globals/Overlay'
import ModalLogin from '~/components/modals/Login'
import ModalRecovery from '~/components/modals/Recovery'
import ModalCreateAccount from '~/components/modals/CreateAccount'
import ModalConfirmation from '~/components/modals/Confirm'
import ModalSuccess from '~/components/modals/Success'
import ModalAdminAction from '~/components/modals/AdminAction'
import ModalEditAccount from '~/components/modals/EditAccount'
export default {
  components: {
    Overlay, ModalLogin, ModalRecovery, ModalCreateAccount, ModalConfirmation, ModalSuccess, ModalAdminAction, ModalEditAccount
  },
  data: () => ({
    overlay: false,
    login: false,
    recovery: false,
    createAccount: false,
    confirmation: false,
    success: false,
    adminAction: false,
    add: null,
    create: false,
    agency: false,
    editAccount: false,
    epassword: false
  }),
  mounted () {
    this.$nuxt.$on('OVERLAY_ACTIVE', () => (this.overlay = true))
    this.$nuxt.$on('OVERLAY_DISABLED', () => (this.overlay = false))

    // modals
    this.$nuxt.$on('LOGIN_ACTIVE', () => (this.login = true))
    this.$nuxt.$on('LOGIN_DISABLED', () => (this.login = false))
    this.$nuxt.$on('RECOVERY_ACTIVE', () => (this.recovery = true))
    this.$nuxt.$on('RECOVERY_DISABLED', () => (this.recovery = false))
    this.$nuxt.$on('CREATE_ACTIVE', (bool) => {
      this.create = bool
      this.createAccount = true
    })
    this.$nuxt.$on('CREATE_DISABLED', () => (this.createAccount = false))
    this.$nuxt.$on('CONFIRMATION_ACTIVE', () => (this.confirmation = true))
    this.$nuxt.$on('CONFIRMATION_DISABLED', () => (this.confirmation = false))
    this.$nuxt.$on('SUCCESS_ACTIVE', () => (this.success = true))
    this.$nuxt.$on('SUCCESS_DISABLED', () => (this.success = false))
    this.$nuxt.$on('ADMIN_ACTION_ACTIVE', (e) => {
      if (typeof e === 'string' || typeof e === 'boolean') {
        this.add = e
        this.adminAction = true
        return true
      }

      this.add = 'agency'
      this.agency = e
      this.adminAction = true
    })
    this.$nuxt.$on('ADMIN_ACTION_DISABLED', () => (this.adminAction = false))
    this.$nuxt.$on('EDIT_ACCOUNT_ACTIVE', (bool) => {
      this.editAccount = true
      this.epassword = bool
    })
    this.$nuxt.$on('EDIT_ACCOUNT_DISABLED', () => (this.editAccount = false))
  }
}
</script>
