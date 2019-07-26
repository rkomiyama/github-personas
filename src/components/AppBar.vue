<template>
  <v-app-bar
    height=64
    app
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click.stop="$emit('click:drawer')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title class="headline text-uppercase hidden-xs-only">
      <v-flex class="d-flex align-center">
        <v-img
          class="hidden-sm-and-down"
          :src="require('../assets/github.svg')"
          height=64
        />
        <span>GitHub&nbsp;</span>
        <span class="font-weight-light">PERSONAS</span>
      </v-flex>
    </v-toolbar-title>
    <v-spacer class="hidden-xs-only"></v-spacer>
    <v-text-field
      v-model="searchField"
      :label="searchFieldLabels[searchUserOption]"
      @blur="checkFieldChange"
      @change="changeUser"
      prepend-icon="mdi-account-search"
      hide-details
    >
    </v-text-field>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  methods: {
    checkFieldChange () {
      if (this.oldSearchField === this.searchField) {
        this.userChange = false
      }
    },
    changeUser () {
      if (this.userChange) {
        this.$emit('change:user', this.searchField)
        this.oldSearchField = this.searchField
      } else {
        this.turnUserChangeOn()
      }
    },
    turnUserChangeOn () {
      this.userChange = true
    }
  },
  data () {
    return {
      oldSearchField: null,
      searchField: "",
      userChange: true,
      searchFieldLabels: {
        username: 'Search by Username',
        fullname: 'Search by Full Name'
      }
    }
  },
  props: {
    searchUserOption: String
  }
}
</script>
