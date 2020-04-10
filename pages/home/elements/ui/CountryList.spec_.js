import { shallowMount } from "@vue/test-utils";
import CountryList from "@/pages/home/elements/ui/CountryList.vue";


describe("Check [ CountryList ] component is vue instance", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      change: jest.fn()
    };
  });

  beforeEach(() => {
    wrapper = shallowMount(CountryList);
    jest.resetModules();
    jest.clearAllMocks();
  });

  test("is a Vue instance", () => {
    wrapper = shallowMount(CountryList);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("change", () => {
    wrapper = shallowMount(CountryList, { actions });
    wrapper.vm.change(1, 1);
    expect(wrapper.emitted().change[1]).toEqual([123]);
  });
});
