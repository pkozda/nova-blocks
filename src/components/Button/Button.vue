<template>
    <button
        class="nb-button"
        :class="[
            `nb-button--${size}`,
            `nb-button--${variant}`,
            { 'nb-button--disabled': disabled },
            { 'nb-button--loading': loading },
            ]"
        :disabled="disabled || loading"
    >
        <span v-if="loading">
            <slot />
            <span class="nb-button__spinner" />
        </span>
        <span v-else><slot /></span>
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
        size: {
            type: String,
            default: 'medium'
        },
        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
})
</script>
  
<style lang="scss" src="./Button.scss"></style>
