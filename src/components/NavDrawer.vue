<template>
  <v-layout class="d-block">
    <v-toolbar-title class="headline text-uppercase py-2 hidden-sm-and-up">
      <v-flex class="d-flex align-center">
        <v-img
          :src="require('../assets/github.svg')"
          height="36px"
          max-width="36px"
        />
        <span>GitHub&nbsp;</span>
        <span class="font-weight-light">PERSONAS</span>
      </v-flex>
    </v-toolbar-title>
    <v-list dense>
      <v-list-group
        prepend-icon="mdi-magnify"
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              Search by...
            </v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item-group v-model="searchOption">
          <v-list-item
            class="pl-10"
            link
            @click="$emit('change:searchUser', 'username')"
          >
            <v-list-item-action>
              <v-icon>mdi-account-search</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Username</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            class="pl-10"
            link
            @click="$emit('change:searchUser', 'fullname')"
          >
            <v-list-item-action>
              <v-icon>mdi-face</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Full name</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list-group>
      <!-- <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-settings</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->
    </v-list>
  </v-layout>
</template>

<script>
export default {
  name: "NavDrawer",
  data () {
    return {
      searchOption: 0
    }
  }
}
</script>
