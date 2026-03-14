<template>
    <button class="btn">
      <slot>Button</slot>
    </button>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Button'
  })
  </script>
  
  <style lang="scss" src="./Button.scss"></style>
  