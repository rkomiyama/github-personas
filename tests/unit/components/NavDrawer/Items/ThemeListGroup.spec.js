import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer';
import themes from '@/themes'
import ThemeListGroup from '@/components/NavDrawer/Items/ThemeListGroup.vue'

Vue.use(Vuetify)
let wrapper

describe('ThemeListGroup.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ThemeListGroup)
    wrapper.vm.$vuetify = {
      theme: {
        themes: {
          light: themes.light,
          dark: themes.dark
        }
      }
    }
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  it('calls swapColors', () => {
    wrapper.vm.swapColors(themes.red)
    expect(wrapper.vm.$vuetify.theme.themes.light).toEqual(themes.red.themes.light)
  })

  it('calls clickListItem', () => {
    wrapper.vm.clickListItem(themes.dark)
    expect(wrapper.vm.$data.darkTheme).toBeTruthy()
    wrapper.vm.clickListItem(themes.red)
    expect(wrapper.vm.$vuetify.theme.themes.dark).toEqual(themes.red.themes.dark)
    wrapper.vm.clickListItem(themes.dark)
    expect(wrapper.vm.$data.darkTheme).toBeFalsy()
  })

  it('ThemeListGroup renders the same HTML', () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
    if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
})
