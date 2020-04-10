import { shallowMount } from '@vue/test-utils'
import Check from '@/pages/home/elements/ui/Check.vue'

describe('Check [ Check ] component is vue instance', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Check, {
      props:{
        country: "teste",
        color: "#ccc"
      }

    })

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
