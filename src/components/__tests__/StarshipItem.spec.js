import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import StarshipItem from '../StarshipItem.vue'

describe('StarshipItem', () => {

  it('renders properly', () => {
    expect(StarshipItem).toBeTruthy()
  })

  
  it('renders right date format', () => {
    const wrapper = mount(StarshipItem, {
      props: {
        name: "my starship", 
        created: new Date(2000, 0, 1, 13)
      } 
    })
    expect(wrapper.vm.formatted_date).toEqual("01/01/2000 13:00:00")
  })
})