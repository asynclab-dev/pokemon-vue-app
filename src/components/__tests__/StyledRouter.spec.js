import { it, describe, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import StyledRouter from '@/components/StyledRouter.vue'

describe('Styled Router Component', () => {
  it('renders content in <slot/>', () => {
    const wrapper = mount(StyledRouter, { slots: { default: 'Explore' } })
    expect(wrapper.text()).toContain('Explore')
  })
  it('requires a /"to/" url path prop', () => {})
  it('url path begins with a forward slash', () => {})
})
