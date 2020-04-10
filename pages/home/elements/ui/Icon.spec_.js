import { shallowMount } from '@vue/test-utils'
import Icon from '@/pages/home/elements/ui/Icon.vue'

describe("Icon [ Icon ] component is vue instance", () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Icon)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
