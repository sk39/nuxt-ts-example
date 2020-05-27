<template>
  <div>
    <div class="sub-bar elevation-1">
      <div>Sign In</div>
    </div>
    <v-container>
      <div class="form-wrapper">
        <SignInForm />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SignInForm from '~/components/auth/SignInForm.vue'

@Component({ components: { SignInForm } })
export default class SignIn extends Vue {}
</script>

<style lang="scss">
.form-wrapper {
  padding-top: 52px;
  text-align: center;
  width: 100%;
}
</style>
