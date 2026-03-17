import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import {{pascalName}} from './{{pascalName}}.vue'

describe('{{pascalName}}', () => {
    it('renders slot content', () => {
        const wrapper = mount({{pascalName}}, {
            slots: {
                default: 'Test'
            }
        })

        expect(wrapper.text()).toContain('Test')
    })
})
