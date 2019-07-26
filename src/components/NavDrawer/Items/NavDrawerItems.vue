<template>
  <v-list
    dense
    expand
    nav
  >
    <SearchListGroup />
    <ThemeListGroup />
  </v-list>
</template>

<script>
import SearchListGroup from './SearchListGroup'
import ThemeListGroup from './ThemeListGroup'

export default {
  name: 'NavDrawerItems',
  methods: {
    swapThemes (newTheme) {
      this.$vuetify.theme[newTheme] = true
      this.$vuetify.theme[this.currentTheme] = false
      this.currentTheme = newTheme
    }
  },
  components: {
    SearchListGroup,
    ThemeListGroup
  }
}
</script>
