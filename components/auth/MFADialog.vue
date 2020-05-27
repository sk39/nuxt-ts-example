<template>
  <v-dialog v-model="value" max-width="560" persistent>
    <v-card>
      <v-card-title class="headline">Two-Factor Authentication</v-card-title>

      <v-card-text>
        Enter the Verification Code from your authenticator app.
      </v-card-text>

      <div class="code-wrapper">
        <InputVerifyCode ref="input" v-model="code" />
      </div>

      <v-card-actions class="btn-area">
        <v-spacer />
        <v-btn
          color="secondary"
          :disabled="loading"
          large
          width="120"
          @click="handleChange(false)"
        >
          Cancel
        </v-btn>

        <v-btn
          color="primary"
          :loading="loading"
          large
          width="120"
          @click="verify"
        >
          Verify
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'nuxt-property-decorator'
import InputVerifyCode from '~/components/form/InputVerifyCode.vue'

@Component({ components: { InputVerifyCode } })
export default class MFADialog extends Vue {
  @Prop({ type: Boolean })
  value?: boolean

  loading: boolean = false
  valid: boolean = false
  errorMessage?: string
  code: string = ''

  @Watch('value')
  onChangeShow(value) {
    if (value) {
      this.code = ''
      Vue.nextTick(() => {
        const input: any = this.$refs.input
        input && input.focus()
      })
    }
  }

  @Emit('input')
  handleChange(value: boolean) {
    return value
  }

  async verify() {
    this.loading = true
    try {
      await this.$store.dispatch('auth/verifyCode', {
        code: this.code
      })
      this.handleChange(false)
    } catch (e) {
      // TODO:
    } finally {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.code-wrapper {
  padding: 6px 0 12px 48px;
}

.headline {
  padding: 36px 24px 24px !important;
}

.btn-area {
  padding: 24px;
}
</style>
