<template>
  <div>
    <div class="sub-bar elevation-1">
      <div>Setup Two-Factor Authentication</div>
    </div>
    <v-container>
      <div class="form-wrapper">
        <SetupMFAForm />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SetupMFAForm from '~/components/auth/SetupMFAForm.vue'

@Component({ components: { SetupMFAForm } })
export default class SettingMFA extends Vue {}
</script>

<style lang="scss">
.form-wrapper {
  padding-top: 52px;
  text-align: center;
  width: 100%;
}
</style>
