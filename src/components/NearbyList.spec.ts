import { mount } from '@vue/test-utils'
import NearbyList from './NearbyList.vue'

jest.mock('../store')

describe('NearbyList', () => {
    it('should display list of cards', () => {
        const item1 = {
            name: 'Donut Shop',
            address: '555 Main St, 90022',
            bearing: 'SE',
            distance: 22.4
        }
        const item2 = {
            name: 'Coffee Shop',
            address: '555 South St, 90022',
            bearing: 'N',
            distance: 34.4
        }
        const wrapper = mount(NearbyList, {
            props: { items: [item1, item2]}
        })
        expect(wrapper.findAll('calcite-list-item').length).toEqual(2)

    })
})