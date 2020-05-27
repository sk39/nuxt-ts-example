<template>
  <div class="container elevation-3">
    <div class="logo-wrapper">
      <Logo size="72" text-size="52" />
    </div>
    <v-form class="form" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="userName"
        prepend-icon="mdi-account-circle"
        type="text"
        label="User Name"
        required
      />
      <v-text-field
        v-model="password"
        prepend-icon="mdi-lock"
        type="password"
        label="Password"
        required
      />

      <v-btn
        class="btn-signIn"
        color="primary"
        block
        large
        :loading="loading"
        @click="signIn"
      >
        Sign In
      </v-btn>

      <v-btn color="primary" text large @click="forgotPassword">
        Forgot your password?
      </v-btn>
    </v-form>
    <MFADialog v-model="showMFA" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import MFADialog from '~/components/auth/MFADialog.vue'

@Component({ components: { Logo, MFADialog } })
export default class SignInForm extends Vue {
  loading: boolean = false
  valid: boolean = false
  errorMessage?: string
  userName: string = ''
  password: string = ''
  showMFA: boolean = false

  async signIn() {
    this.loading = true
    try {
      await this.$store.dispatch('auth/signIn', {
        userName: this.userName,
        password: this.password
      })
      this.showMFA = true
    } catch (e) {
      // TODO:
    } finally {
      this.loading = false
    }
  }

  forgotPassword() {
    // TODO:
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: $color_header_back;
  width: 600px;
  border-radius: 20px;
  margin: auto;
  text-align: center;
}

.form {
  padding: 24px 56px;
}

.btn-signIn {
  margin: 36px 0 12px;
}

.logo-wrapper {
  padding: 48px 0 16px;
}
</style>
