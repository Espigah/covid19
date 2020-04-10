import { shallowMount } from '@vue/test-utils'
import Info from '@/pages/home/elements/ui/Info.vue'

describe("Check [ Info ] component is vue instance", () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Info)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })
})
