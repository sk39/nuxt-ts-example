<template>
  <div>
    <div class="sub-bar elevation-1">
      <div>Top Page</div>
    </div>
    <v-container>
      <div class="links">
        <nuxt-link class="link" to="/auth/signin">
          Sign In Example
        </nuxt-link>
        <nuxt-link class="link" to="/auth/setup_mfa">
          Setup 2FA Example
        </nuxt-link>
        <nuxt-link class="link" to="/authenticated/list_example">
          Authenticated List Example
        </nuxt-link>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ components: {} })
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.link {
  margin: 12px 0;
  font-size: 1.2rem;
}
</style>
