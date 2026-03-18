import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button.vue', () => {
    it('renders correctly', () => {
        const wrapper = mount(Button)
        expect(wrapper.exists()).toBe(true)
    })
    it('applies variant class', () => {
        const wrapper = mount(Button, {
            props: { variant: 'secondary' }
        })
    
        expect(wrapper.classes()).toContain('nb-button--secondary')
    })
    it('applies disabled class', () => {
        const wrapper = mount(Button, {
            props: { disabled: true }
        })

        expect(wrapper.classes()).toContain('nb-button--disabled')
    })
})
