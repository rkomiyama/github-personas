import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import SearchListGroup from '@/components/NavDrawer/Items/SearchListGroup.vue'

Vue.use(Vuetify)

describe('SearchListGroup.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(SearchListGroup)
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
})
