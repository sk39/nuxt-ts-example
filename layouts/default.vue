<template>
  <v-app>
    <v-app-bar
      class="elevation-0"
      fixed
      app
    >
      <Logo></Logo>
      <v-spacer/>
      <v-btn color="primary" outlined small @click="contactUs">
        Contact US
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'
  import Logo from '~/components/Logo.vue'

  @Component({ components: { Logo } })
  export default class DefaultLayout extends Vue {

    contactUs() {

    }
  }
</script>
