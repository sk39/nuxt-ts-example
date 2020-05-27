<template>
  <v-dialog v-model="value" max-width="560" persistent>
    <v-card>
      <v-card-title class="headline">Sign out</v-card-title>

      <v-card-text>
        Are you sure to Sign out
      </v-card-text>

      <v-card-actions class="btn-area">
        <v-spacer />
        <v-btn color="secondary" large width="120" @click="handleChange(false)">
          Cancel
        </v-btn>

        <v-btn color="primary" large width="120" @click="singOut">
          Sign out
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator'

@Component({ components: {} })
export default class SignOutDialog extends Vue {
  @Prop({ type: Boolean })
  value?: boolean

  @Emit('input')
  handleChange(value: boolean) {
    return value
  }

  singOut() {
    try {
      this.$store.dispatch('auth/signOut')
      this.handleChange(false)
    } catch (e) {
      // TODO:
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  padding: 6px 48px 12px;
}

.headline {
  padding: 36px 24px 24px !important;
}

.btn-area {
  padding: 24px;
}
</style>
