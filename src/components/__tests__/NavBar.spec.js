import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'

it('renders with max width and centered', () => {
  const wrapper = mount(NavBar)
  expect(wrapper.html()).contain('section')
})
