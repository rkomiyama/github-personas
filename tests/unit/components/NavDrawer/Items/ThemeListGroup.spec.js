import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import ThemeListGroup from '@/components/NavDrawer/Items/ThemeListGroup.vue'

Vue.use(Vuetify)

describe('ThemeListGroup.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(ThemeListGroup)
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
})
