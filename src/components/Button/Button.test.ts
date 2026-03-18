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

    it('applies size class', () => {
        const wrapper = mount(Button, { props: { size: 'large' } })
        expect(wrapper.classes()).toContain('nb-button--large')
    })

    it('shows spinner when loading', () => {
        const wrapper = mount(Button, { props: { loading: true } })
        expect(wrapper.find('.nb-button__spinner').exists()).toBe(true)
    })

    it('disables button when loading', () => {
        const wrapper = mount(Button, { props: { loading: true } })
        expect(wrapper.attributes('disabled')).toBeDefined()
    })
})
