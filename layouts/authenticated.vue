<template>
  <v-app>
    <v-app-bar class="elevation-0" fixed app>
      <Logo />

      <div class="app-header-group">
        <nuxt-link class="app-header-link" to="/authenticated/list_example">
          List Example
        </nuxt-link>
        <nuxt-link class="app-header-link" to="/authenticated/form_example">
          Form Example
        </nuxt-link>
      </div>
      <v-spacer />
      <SignInUserMenu />
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import SignInUserMenu from '~/components/navigator/SignInUserMenu.vue'

@Component({ components: { Logo, SignInUserMenu } })
export default class AuthenticatedLayout extends Vue {}
</script>
