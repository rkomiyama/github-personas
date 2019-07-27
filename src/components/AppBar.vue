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
          :src="require('@/assets/github.svg')"
          height=64
        />
        <span>GitHub&nbsp;</span>
        <span class="font-weight-light">PERSONAS</span>
      </v-flex>
    </v-toolbar-title>
    <v-spacer class="hidden-xs-only"></v-spacer>
    <v-text-field
      v-model="searchField"
      type="input"
      :label="searchFieldLabels[searchUserOption]"
      @blur="userChange = false"
      @change="changeUser"
      prepend-icon="mdi-account-search"
      :maxlength="maxLength[searchUserOption]"
      :rules="[rules[searchUserOption]]"
      data-test="searchFieldTest"
      hide-details
    >
    </v-text-field>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  methods: {
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
    },
    clearSearchField () {
      this.searchField = ""
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
      },
      rules: {
        username: val => {
          const regex = /^(([A-Za-z0-9])+(([A-Za-z0-9-])+([A-Za-z0-9]))?)*$/
          return regex.test(val) || 'Invalid username.'
        },
        fullname: () => {
          return true
        }
      },
      maxLength: {
        username: 39,
        fullname: 200
      }
    }
  },
  props: {
    searchUserOption: String
  }
}
</script>
