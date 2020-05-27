<template>
  <div class="input-wrapper">
    <div class="input-area">
      <input
        ref="input"
        :value="value"
        class="input-code"
        type="text"
        maxlength="6"
        @input="handleChange"
      />
    </div>
    <div class="line-area">
      <span v-for="n in 6" class="border" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator'
import SvgIcon from '~/assets/img/nuxt.svg'

@Component({ components: { SvgIcon } })
export default class InputVerifyCode extends Vue {
  @Prop()
  value?: number

  @Emit('input')
  handleChange(e) {
    console.log('handleChange', e)
    return e.target.value
  }

  focus() {
    Vue.nextTick(() => {
      const input: any = this.$refs.input
      console.log('focus', input)
      input && input.focus()
    })
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  width: 100%;
}

.input-code {
  letter-spacing: 29px;
  font-size: 40px;
  font-weight: 500;
  outline: none;
  margin-left: 15px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  color: $color_theme;
  // for ie11
  width: 400px;
  height: 56px;
}

.input-area {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}

.line-area {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}

.border {
  display: inline-block;
  border-bottom: 1px solid $color_base_border;
  width: 40px;
  height: 2px;
  margin: 0 6px;
}
</style>
