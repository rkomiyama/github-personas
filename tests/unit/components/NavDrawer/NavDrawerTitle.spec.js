import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import NavDrawerTitle from '@/components/NavDrawer/NavDrawerTitle.vue'

Vue.use(Vuetify)

describe('NavDrawerTitle.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(NavDrawerTitle)
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
})
