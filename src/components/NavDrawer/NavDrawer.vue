<template>
  <v-navigation-drawer
    :value="$attrs.value"
    @input="$emit('input:drawer', $event)"
    mobile-break-point=960
    app
  >
    <v-layout class="d-block">
      <NavDrawerTitle />
      <NavDrawerItems />
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import NavDrawerTitle from './NavDrawerTitle'
import NavDrawerItems from './NavDrawerItems'

export default {
  name: "NavDrawer",
  components: {
    NavDrawerTitle,
    NavDrawerItems
  }
}
</script>
