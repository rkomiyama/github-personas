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
  components: {
    SearchListGroup,
    ThemeListGroup
  }
}
</script>
