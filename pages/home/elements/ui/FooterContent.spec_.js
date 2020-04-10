import { shallowMount } from '@vue/test-utils'
import FooterContent from '@/pages/home/elements/ui/FooterContent.vue'

describe("Check [ FooterContent ] component is vue instance", () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(FooterContent)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
