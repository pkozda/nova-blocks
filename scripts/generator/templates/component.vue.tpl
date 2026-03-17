<template>
  <div class="nb-{{name}}">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '{{pascalName}}'
})
</script>

<style lang="scss" src="./{{pascalName}}.scss"></style>
