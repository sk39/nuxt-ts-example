<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="secondary" outlined v-on="on">
          Test User
          <v-icon right color="primary">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.action"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <SignOutDialog v-model="showSingOut" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import SignOutDialog from '~/components/auth/SignOutDialog.vue'

@Component({ components: { SignOutDialog } })
export default class SignInUserMenu extends Vue {
  items = [
    { title: 'Change Password', action: () => alert('TODO:') },
    { title: 'Sign out', action: this.signOut }
  ]

  showSingOut: boolean = false
  signOut() {
    this.showSingOut = true
  }
}
</script>

<style lang="scss" scoped>
.message {
  opacity: 0.6;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: 500;
}

.container {
  min-width: 320px;
  margin-bottom: 1.4rem;
}
</style>
