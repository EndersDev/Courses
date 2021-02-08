<template>
  <custom-header @create-account="handleCreateAccount" @login="handleLogin()" />
  <contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray800">feedbacker © 2021</p>
  </div>
</template>

<script>
/* eslint no-trailing-spaces: "error" */
/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */

// implement loading when click on Entrar and already have a token on storage

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
    const token = { value: '' }

    onMounted(() => {
      // quando for criado
      token.value = window.localStorage.getItem('token')
      if (token.value) {
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
