import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import NavDrawerItems from '@/components/NavDrawer/Items/NavDrawerItems.vue'

Vue.use(Vuetify)

describe('NavDrawerItems.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(NavDrawerItems)
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
})
