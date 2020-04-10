import { shallowMount } from '@vue/test-utils'
import Introduction from '@/pages/home/elements/ui/Introduction.vue'

describe("Check [ Introduction ] component is vue instance", () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Introduction)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
