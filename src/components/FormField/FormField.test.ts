import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormField from './FormField.vue'

describe('FormField', () => {
    it('renders correctly', () => {
        const wrapper = mount(FormField)
        expect(wrapper.exists()).toBe(true)
    })

    it('renders children', () => {
        const wrapper = mount(FormField, {
            slots: { default: 'This is a form field' }
        })
        expect(wrapper.text()).toBe('This is a form field')
    })
})
