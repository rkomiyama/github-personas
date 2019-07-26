<template>
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
    <v-list-item-group
      v-model="searchOption"
      mandatory
    >
      <v-list-item
        class="pl-10"
        link
        @click="$root.$emit('change:searchUser', 'username')"
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
        @click="$root.$emit('change:searchUser', 'fullname')"
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
</template>

<script>
export default {
  name: 'SearchListGroup',
  data () {
    return {
      searchOption: 0
    }
  }
}
</script>
