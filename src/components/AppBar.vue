<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click.stop="$emit('click:drawer')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title class="headline text-uppercase hidden-xs-only">
      <v-flex class="d-flex align-center">
        <v-img
          class="hidden-sm-and-down"
          :src="require('../assets/github.svg')"
          height="64px"
        />
        <span>GitHub&nbsp;</span>
        <span class="font-weight-light">PERSONAS</span>
      </v-flex>
    </v-toolbar-title>
    <v-spacer class="hidden-xs-only"></v-spacer>
    <v-text-field
      v-model="searchField"
      @change="$emit('change:user', searchField)"
      prepend-icon="mdi-account-search"
      hide-details
    >
    </v-text-field>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data() {
    return {
      searchField: ""
    }
  }
}
</script>
