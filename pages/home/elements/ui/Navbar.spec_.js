import { shallowMount } from '@vue/test-utils'
import Navbar from '@/pages/home/elements/ui/Navbar.vue'

describe("Check [ Navbar ] component is vue instance", () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
