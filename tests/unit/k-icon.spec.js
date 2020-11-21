import { shallowMount } from '@vue/test-utils'
import kIcon from '@/components/k-icon.vue'

describe('k-icon.vue', () => {
  test('测试组件k-icon传参是否正常', () => {
    const name = 'setting'
    const wrapper = shallowMount(kIcon, {
      propsData: { name }
    })
    expect(wrapper.element.querySelector('use').getAttribute('xlink:href')).toBe(`#icon-${name}`)
  })
})
