import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueFlags from "@growthbunker/vueflags";
import Flag from "@/pages/home/elements/ui/Flag.vue";

Vue.use(VueFlags, {
  // Specify the path of the folder where the flags are stored.
  iconPath: "/assets/flags/"
});

describe("Flag [ Flag ] component is vue instance", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Flag, { propsData: { code: "BR" } });
  });

  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("code to be BR", () => {
    expect(wrapper.props('code')).toBe('BR')
  });


});