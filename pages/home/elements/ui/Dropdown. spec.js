import { shallowMount } from '@vue/test-utils'
import Dropdown from '@/pages/home/elements/ui/Dropdown.vue'

describe("Check [ Dropdown ] component is vue instance", () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Dropdown)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
