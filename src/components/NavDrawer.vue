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
      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-settings</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-layout>
</template>

<script>
export default {
  name: "NavDrawer"
}
</script>
