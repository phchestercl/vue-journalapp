import { shallowMount } from '@vue/test-utils'
import About from '../../../src/views/About.vue'

describe('/src/views/About', () => {
  test('Snapshot Abuot', () => {
    
    const wrapper = shallowMount(About)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
