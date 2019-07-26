<template>
  <v-list
    dense
    nav
  >
    <v-list-group
      prepend-icon="mdi-magnify"
      value="true"
      ripple
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
          @click="$parent.$parent.$emit('change:searchUser', 'username')"
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
          @click="$parent.$parent.$emit('change:searchUser', 'fullname')"
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
  </v-list>
</template>

<script>
export default {
  name: 'NavDrawerItems',
  data () {
    return {
      searchOption: 0
    }
  }
}
</script>
