import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Label from './Label.vue'

describe('Label', () => {
    it('renders correctly', () => {
        const wrapper = mount(Label)
        expect(wrapper.exists()).toBe(true)
    })

    it('renders message', () => {
        const wrapper = mount(Label, {
            props: { message: 'This is a label' }
        })
        expect(wrapper.text()).toBe('This is a label')
    })
})
