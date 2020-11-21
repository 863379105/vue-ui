import { shallowMount } from '@vue/test-utils'
import kButton from '@/components/k-button.vue'

describe('k-button.vue',() => {
    test('测试k-button的slot是否正确',() => {
        const wrapper = shallowMount(kButton,{
            slots: { 
                default : '按钮'
            }
        })
        expect(wrapper.text()).toContain('按钮')
    })
})