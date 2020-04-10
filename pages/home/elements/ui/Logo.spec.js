import { shallowMount } from '@vue/test-utils'
import Logo from '@/pages/home/elements/ui/Logo.vue'

describe("Check [ Logo ] component is vue instance", () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
