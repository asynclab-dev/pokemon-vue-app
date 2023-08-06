import { it, expect, describe, vi, beforeAll } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import SearchBar from '../SearchBar.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '../../router'

// Mock real router instance
let router
beforeAll(async () => {
  router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
  })

  router.push('/') // omitting this causes a timeout error
  await router.isReady()
})

function mountedSearch() {
  return mount(SearchBar, { global: { plugins: [router] } })
}

it('renders the SearchBar component', async () => {
  const wrapper = mountedSearch()

  expect(wrapper.find('input[type="text"]').exists()).toBe(true)
  expect(wrapper.find('button').text()).toBe('Search')
  expect(wrapper.findComponent({ name: 'SearchIcon' }).exists()).toBe(true)
})

it('renders with an empty search input', () => {
  const wrapper = mountedSearch()
  expect(wrapper.find('input').element.value).toBe('')
})

it('updates the searchInput variable when the user types', () => {
  const wrapper = mount(SearchBar, { global: { plugins: [router] } })
  const input = wrapper.find('input')
  input.setValue('pikachu')
  expect(wrapper.vm.searchInput).toBe('pikachu')
})

describe('handleSearch function', () => {
  it('runs only when search field is not empty', async () => {
    const wrapper = mount(SearchBar, { global: { plugins: [router] } })

    const handleSearchSpy = vi.spyOn(wrapper.vm, 'handleSearch')
    const pushSpy = vi.spyOn(router, 'push')

    // makes sure component has finished updating.
    await wrapper.find('[data-test="search-button"]').trigger('click')
    await wrapper.find('input').setValue('')

    expect(handleSearchSpy).toHaveBeenCalledOnce()
  })

  it('converts search field value to lowercase before fetching data', () => {})

  it('does not navigate when searchInput is empty', async () => {
    // const wrapper = mount(SearchBar, { global: { plugins: [router] } })
    // await wrapper.get('input').setValue('')
    // const routerSpy = vi.spyOn(router, 'push')
    // await wrapper.find('[data-test="search-button"]').trigger('click')
    // expect(routerSpy).toHaveBeenCalled()
    // Ensure the router.push is not called
  })

  it('navigates to the correct URL on search', async () => {
    const wrapper = mount(SearchBar, { global: { plugins: [router] } })

    await wrapper.get('input').setValue('charizad')
    await wrapper.find('[data-test="search-button"]').trigger('click')
    const routerSpy = vi.spyOn(router, 'push')

    // expect(wrapper.vm.handleSearch).toHaveBeenCalledOnce()
    // expect(routerSpy).toHaveBeenCalledWith(`/pokemon/`)

    // await nextTick()

    // Assert that the navigation was successful and the route is correct
    // expect(wrapper.vm.$route.name).toBe('pokemon')
    // expect(wrapper.vm.$route.params.name).toBe('pikachu')
  })
})

// const nextTick = () => new Promise((resolve) => setTimeout(resolve, 0))
