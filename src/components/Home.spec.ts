import { mount } from '@vue/test-utils'
import Home from './Home.vue'

jest.mock('../store')

describe('Home', () => {
    it('should have containers', () => {
        const wrapper = mount(Home)

        expect(wrapper.find('.search-container').exists()).toBe(true)
        expect(wrapper.find('.card-container').exists()).toBe(true)

    })
})