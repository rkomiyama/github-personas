import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import AppBar from '@/components/AppBar.vue'

Vue.use(Vuetify)

describe('AppBar.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(AppBar)
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
})
