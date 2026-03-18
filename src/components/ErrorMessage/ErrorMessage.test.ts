import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ErrorMessage from './ErrorMessage.vue'

describe('ErrorMessage', () => {
    it('renders correctly', () => {
        const wrapper = mount(ErrorMessage)
        expect(wrapper.exists()).toBe(true)
    })

    it('renders message', () => {
        const wrapper = mount(ErrorMessage, {
            props: { message: 'This is an error message' }
        })
        expect(wrapper.text()).toBe('This is an error message')
    })
})
