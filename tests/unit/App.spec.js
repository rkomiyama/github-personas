import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

Vue.use(Vuetify)

describe('App.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
})
