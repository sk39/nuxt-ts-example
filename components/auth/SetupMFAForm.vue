<template>
  <div>
    <div class="setup-container text-left">
      <div class="explanation">
        <span>1.</span>
        <p>
          Please register the following account to the authentication
          application.
        </p>
      </div>

      <div class="qr-wrapper">
        <QRCode :path="otpauth" />
        <div class="account-code-wrapper">
          <div class="label">Account Code</div>
          <div class="account-code">{{ accoountCode }}</div>
        </div>
      </div>

      <div class="explanation">
        <span>2.</span>
        <p>
          After registering the account, enter the verification code displayed
          on the verification application.
        </p>
      </div>

      <v-form class="form" ref="form" v-model="valid" lazy-validation>
        <InputVerifyCode ref="input" v-model="code" />
        <v-btn
          class="btn-signIn"
          color="primary"
          x-large
          :loading="loading"
          @click="verify"
        >
          Verify And Save
        </v-btn>
      </v-form>
    </div>
    <PageLoading :show="!otpauth || otpauth.length === 0" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import QRCode from '~/components/other/QRCode.vue'
import InputVerifyCode from '~/components/form/InputVerifyCode.vue'
import PageLoading from '~/components/PageLoading.vue'

@Component({ components: { QRCode, InputVerifyCode, PageLoading } })
export default class SetupMFAForm extends Vue {
  loading: boolean = false
  valid: boolean = false
  errorMessage?: string
  otpauth: string = ''
  accoountCode: string = '------------'
  code: string = ''

  async mounted() {
    await this.load()
    Vue.nextTick(() => {
      const input: any = this.$refs.input
      input && input.focus()
    })
  }

  async load() {
    try {
      this.otpauth = await this.$store.dispatch('auth/getOtpAuthUri')
      this.accoountCode = 'xxxxxxxxxxxxxx'
    } catch (e) {
      // TODO:
    }
  }

  async verify() {
    this.loading = true
    try {
      await this.$store.dispatch('auth/verifyCode', {
        code: this.code
      })
    } catch (e) {
      // TODO:
    } finally {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.setup-container {
  background: $color_header_back;
  border-radius: 20px;
  padding: 24px 48px;
  max-width: 860px;
  margin: 0 auto;
}

.explanation {
  padding: 12px 0 0;
  display: flex;
  align-items: flex-start;

  span {
    margin-right: 12px;
    font-size: 2.2rem;
    color: $color_theme;
  }

  p {
    font-size: 1.4rem;
    opacity: 0.6;
    padding-top: 0.8rem;
    margin: 0;
  }
}

.qr-wrapper {
  padding: 12px 24px 24px 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.account-code-wrapper {
  padding-left: 48px;

  .label {
    opacity: 0.6;
    font-size: 1.2rem;
  }
}

.account-code {
  background: $color_theme_light1;
  color: $color_theme_dark1;
  font-size: 2rem;
  border-radius: 10px;
  letter-spacing: 4px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 326px;
  padding: 0 12px;
}

.form {
  padding: 24px 24px 24px 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.btn-signIn {
  margin: 24px 0 12px;
}

.logo-wrapper {
  padding: 48px 0 16px;
}
</style>
