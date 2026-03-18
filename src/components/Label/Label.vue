<template>
    <label class="nb-label">
        <slot>{{ message }}</slot>
    </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Label',
    props: {
        message: {
            type: String,
            default: ''
        }
    }
})
</script>

<style lang="scss" src="./Label.scss"></style>
