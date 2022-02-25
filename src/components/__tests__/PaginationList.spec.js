import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import PaginationList from '../PaginationList.vue'

describe('PaginationList', () => {
  let wrapper;
  
  it('renders properly', () => {
    expect(PaginationList).toBeTruthy()
  })

  beforeEach(() => {
    wrapper = mount(PaginationList, {
      global: {
        stubs: ['FontAwesomeIcon']
      },
      props: {
        totalPages: 5, 
        perPage: 10, 
        currentPage: 3
      } 
    })
  })

  it('contains right page number', () => {
    expect(wrapper.text()).toContain(3)
  })

  it('fire right event', () => {
    wrapper.vm.onClickFirstPage()
    expect(wrapper.emitted().pagechanged[0]).toEqual([1])

    wrapper.vm.onClickPreviousPage()
    expect(wrapper.emitted().pagechanged[1]).toEqual([2])

    wrapper.vm.onClickNextPage()
    expect(wrapper.emitted().pagechanged[2]).toEqual([4])

    wrapper.vm.onClickLastPage()
    expect(wrapper.emitted().pagechanged[3]).toEqual([5])

    wrapper.vm.onClickPage(4)
    expect(wrapper.emitted().pagechanged[4]).toEqual([4])
    
  })

  it('returns right pages range', () => {
    const expected = [
      {name: 1, isDisabled: false},
      {name: 2, isDisabled: false},
      {name: 3, isDisabled: true},
      {name: 4, isDisabled: false},
      {name: 5, isDisabled: false}
    ]
    expect(wrapper.vm.pages).toEqual(expected)
  })

  it('returns true when last page is equal to current page', () => {
    wrapper = mount(PaginationList, {
      global: {
        stubs: ['FontAwesomeIcon']
      },
      props: {
        totalPages: 5, 
        perPage: 10, 
        currentPage: 5
      } 
    })
    expect(wrapper.vm.isInLastPage).toBeTruthy()
    expect(wrapper.vm.isInFirstPage).toBeFalsy()
  })
  it('returns true when first page is equal to current page', () => {
    wrapper = mount(PaginationList, {
      global: {
        stubs: ['FontAwesomeIcon']
      },
      props: {
        totalPages: 5, 
        perPage: 10, 
        currentPage: 1
      } 
    })
    expect(wrapper.vm.isInFirstPage).toBeTruthy()
    expect(wrapper.vm.isInLastPage).toBeFalsy()
  })
})
