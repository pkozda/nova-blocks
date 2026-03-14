import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button.vue', () => {
    it('renders correctly', () => {
        const wrapper = mount(Button)
        expect(wrapper.exists()).toBe(true)
    })
})
