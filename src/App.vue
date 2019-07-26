<template>
  <v-app>
    <NavDrawer
      v-model="drawer"
      @input:drawer="drawer = $event"
    />
    <AppBar
      @click:drawer="drawer = !drawer"
      @change:user="searchUser"
      :searchUserOption="searchUserOption"
      ref="appBar"
    />
    <ProfileBioContainer
      v-if="user"
      :user="user"
    />
  </v-app>
</template>

<script>
import NavDrawer from '@/components/NavDrawer/NavDrawer'
import AppBar from '@/components/AppBar'
import ProfileBioContainer from '@/components/ProfileBioContainer'
import { searchUsername, searchFullName, searchUserProfile } from '@/helpers/search'

export default {
  name: 'App',
  methods: {
    searchUserBy (searchOption) {
      this.searchUserOption = searchOption
    },
    async searchUser (searchVal) {
      if (this.prevSearchVal === searchVal) {
        return
      }
      this.prevSearchVal = searchVal
      let userUrl
      switch (this.searchUserOption) {
        case "fullname":
          userUrl = await searchFullName(searchVal)
          break
        case "username":
        default:
          userUrl = await searchUsername(searchVal)
          break
      }
      if (userUrl !== undefined) {
        this.user = await searchUserProfile(userUrl)
      }
    }
  },
  data () {
    return {
      drawer: null,
      searchUserOption: "username",
      searchField: "",
      prevSearchVal: "",
      user: null
    }
  },
  watch: {
    searchUserOption (newOption, oldOption) {
      if (newOption !== oldOption) {
        this.$refs.appBar.turnUserChangeOn()
        this.$refs.appBar.clearSearchField()
      }
    }
  },
  created () {
    this.$root.$on('change:searchUser', this.searchUserBy)
  },
  beforeDestroy () {
    this.$root.$off('change:searchUser')
  },
  components: {
    NavDrawer,
    AppBar,
    ProfileBioContainer,
  }
};
</script>
