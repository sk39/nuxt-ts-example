<template>
  <div>
    <div class="sub-bar elevation-1">
      <div>Authenticated List Example</div>
    </div>
    <v-container>
      <div style="font-size: 48px; color:#aaa">TODO:</div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ layout: 'authenticated', components: {} })
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
