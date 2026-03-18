<template>
    <div class="nb-form-field">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FormField'
})
</script>

<style lang="scss" src="./FormField.scss"></style>
