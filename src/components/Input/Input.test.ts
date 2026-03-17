import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('Input', () => {
    it('renders value', () => {
        const wrapper = mount(Input, {
            props: {
                modelValue: 'test'
            }
        })

        expect((wrapper.find('input').element as HTMLInputElement).value)
            .toBe('test')
    })

    it('emits input', async () => {
        const wrapper = mount(Input)

        await wrapper.find('input').setValue('hello')

        expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    })

    it('applies error class', () => {
        const wrapper = mount(Input, {
            props: { error: true }
        })

        expect(wrapper.classes()).toContain('nb-input--error')
    })
})
