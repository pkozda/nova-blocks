<template>
  <input
      class="nb-input"
      :class="{
          'nb-input--error': error,
          'nb-input--disabled': disabled,
          [`nb-input--${type}`]: !!type,
      }"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="type"
      @input="onInput"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const onInput = (e: Event) => {
      const target = e.target as HTMLInputElement | null
      if (!target) return
      emit('update:modelValue', target.value)
    }

    return { onInput }
  }
})
</script>

<style lang="scss" src="./Input.scss"></style>
