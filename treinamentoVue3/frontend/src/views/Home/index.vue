<template>
  <custom-header @create-account="handleCreateAccount" @login="handleLogin" />
  <contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray800">feedbacker © 2021</p>
  </div>
</template>

<script>
/* eslint no-trailing-spaces: "error" */
/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */

import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CustomHeader from './CustomHeader'
import Contact from './Contact'
import useModal from '../../hooks/useModal'

export default {
  components: { CustomHeader, Contact },
  setup() {
    // funções
    const router = useRouter()
    const modal = useModal()
    onMounted(() => {
      // quando for criado
      const token = window.localStorage.getItem('token')
      if (token) {
        // ver se ja tem um token de login
        router.push({ name: 'Feedbacks' }) // avança pro feedback
      }
    })
    function handleLogin() {
      modal.open({
        component: 'ModalLogin'
      })
    }
    function handleCreateAccount() {
      modal.open({
        component: 'ModalCreateAccount'
      })
    }

    return {
      handleLogin,
      handleCreateAccount
    }
  }
}
</script>

<style></style>
