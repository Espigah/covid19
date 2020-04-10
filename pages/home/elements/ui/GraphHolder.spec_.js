import { shallowMount } from '@vue/test-utils'
import GraphHolder from '@/pages/home/elements/ui/GraphHolder.vue'

describe("Check [ GraphHolder ] component is vue instance", () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(GraphHolder)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
