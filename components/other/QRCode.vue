<template>
  <qriously v-if="path && path.length > 0" :value="path" :size="200" />
  <div v-else style="padding:7px">
    <div class="no-data">No Data</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import VueQriously from 'vue-qriously'

Vue.use(VueQriously)
@Component({ components: {} })
export default class QRCode extends Vue {
  @Prop()
  path?: string
}
</script>

<style lang="scss" scoped>
.no-data {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color_theme_light1;
}
</style>
