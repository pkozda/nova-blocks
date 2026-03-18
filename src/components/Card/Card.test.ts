import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from './Card.vue'

describe('Card.vue', () => {
  it('renders default slot', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Content' },
    })

    expect(wrapper.text()).toContain('Content')
  })

  it('renders header slot', () => {
    const wrapper = mount(Card, {
      slots: { header: 'Header' },
    })

    expect(wrapper.text()).toContain('Header')
  })

  it('renders footer slot', () => {
    const wrapper = mount(Card, {
      slots: { footer: 'Footer' },
    })

    expect(wrapper.text()).toContain('Footer')
  })
})
