import PokeTypePillVue from '../PokeTypePill.vue'
import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

it('renders a type text when component is created', () => {
  const wrapper = mount(PokeTypePillVue, { propsData: { name: 'Fire' } })
  // expect(wrapper.text()).toBe('fire')
  expect(wrapper.text()).toMatch('Fire')
})

it('styles text to lowercase', () => {
  const wrapper = mount(PokeTypePillVue)
  expect(wrapper.classes()).toContain('lowercase')
})
