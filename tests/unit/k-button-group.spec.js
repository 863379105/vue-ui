import { shallowMount } from '@vue/test-utils'
import kButtonGroup from '@/components/k-button-group.vue'
import kButton from '@/components/k-button.vue'

describe('k-button-group.vue',() => {
    test('测试kButtonGroup组件是否正确',() => {
        const wrapper = shallowMount(kButtonGroup,{
            slots : {
                default : [kButton,kButton],
            }
        })
        // console.log(wrapper.findAllComponents(kButton).length);
        expect(wrapper.findAllComponents(kButton).length).toBe(2)
    })
})