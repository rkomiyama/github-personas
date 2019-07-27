import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import NavDrawer from '@/components/NavDrawer/NavDrawer.vue'

Vue.use(Vuetify)

describe('NavDrawer.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(NavDrawer)
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
})
