<template>
    <span class="nb-error" v-if="message">
        {{ message }}
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ErrorMessage',
    props: {
        message: String
    }
})
</script>

<style lang="scss" src="./ErrorMessage.scss"></style>
