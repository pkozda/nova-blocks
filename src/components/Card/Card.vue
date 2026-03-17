<template>
    <div class="nb-card">
        <div v-if="$slots.header" class="nb-card__header">
            <slot name="header" />
        </div>
  
        <div class="nb-card__body">
            <slot />
        </div>
  
        <div v-if="$slots.footer" class="nb-card__footer">
            <slot name="footer" />
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
  
export default defineComponent({
    name: 'Card'
})
</script>
  
  
<style lang="scss" src="./Card.scss"></style>
