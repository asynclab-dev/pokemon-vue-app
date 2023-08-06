import { it, expect, beforeAll, vi } from 'vitest'
import { routes } from '../../router'
import { mount } from '@vue/test-utils'
import PokemonCard from '../PokemonCard.vue'
import PokeTypePill from '../PokeTypePill.vue'
import { createRouter, createWebHistory } from 'vue-router'

let props = {
  name: 'kyogre',
  id: 382,
  imgUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png',
  url: 'htttp',
  exp: '335',
  type: ['water']
}

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

it('navigates to a expected route when clicked', () => {
  const wrapper = mount(PokemonCard, { global: { plugins: [router] }, props: props })

  const pushSpy = vi.spyOn(router, 'push')
  wrapper.trigger('click')

  expect(pushSpy).toHaveBeenCalledOnce()
  expect(pushSpy).toHaveBeenCalledWith(`/pokemon/${props.url}`)
})

it('initializes with valid props & components', () => {
  const wrapper = mount(PokemonCard, { global: { plugins: [router] }, props: props })

  expect(wrapper.get('h5').text()).toBe(props.name)
  expect(wrapper.get('img').attributes('src')).toBe(props.imgUrl)
  expect(wrapper.findComponent(PokeTypePill).exists()).toBeTruthy()
  expect(wrapper.findAllComponents(PokeTypePill).length).toEqual(props.type.length)
  expect(wrapper.get('[data-test="exp"]').text()).toContain(props.exp)
})
