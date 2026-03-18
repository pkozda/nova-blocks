<template>
    <button
      class="nb-button"
      :class="[
        `nb-button--${variant}`,
        { 'nb-button--disabled': disabled },
      ]"
      :disabled="disabled"
    >
        <slot />
    </button>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
  
export default defineComponent({
    name: 'Button',
    props: {
        variant: {
            type: String,
            default: 'primary'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
})
</script>
  
<style lang="scss" src="./Button.scss"></style>
