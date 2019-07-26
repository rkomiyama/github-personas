<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      mobile-break-point=960
      app
    >
      <NavDrawer @change:searchUser="searchUserBy" />
    </v-navigation-drawer>
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
import axios from 'axios';

import NavDrawer from './components/NavDrawer';
import AppBar from './components/AppBar';
import ProfileBioContainer from './components/ProfileBioContainer';

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
      if (this.searchUserOption === "username") {
        userUrl = await this.searchUsername(searchVal)
      } else if (this.searchUserOption === "fullname") {
        userUrl = await this.searchFullName(searchVal)
      }
      if (userUrl !== undefined) {
        this.user = await this.searchUserProfile(userUrl)
      }
    },
    async searchUsername (username) {
      return await axios.get(`https://api.github.com/search/users?q=user:${username}`)
        .then(response => {
          return response.data.items[0].url
        })
        .catch(e => {
          console.error(e)
        })
    },
    async searchFullName (fullname) {
      const name = fullname.replace(/ /g, "+")
      return await axios.get(`https://api.github.com/search/users?q=fullname:${name}`)
        .then(response => {
          return response.data.items[0].url
        })
        .catch(e => {
          console.error(e)
        })
    },
    async searchUserProfile (userUrl) {
      return await axios.get(userUrl)
        .then(response => {
          const {
            name,
            login,
            avatar_url,
            html_url,
            public_repos,
            created_at
          } = response.data
          return { name, login, avatar_url, html_url, public_repos, created_at }
        })
        .catch(e => {
          console.error(e)
        })
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
      }
    }
  },
  components: {
    NavDrawer,
    AppBar,
    ProfileBioContainer,
  },
  created () {
    this.$vuetify.theme.dark = true
  },
};
</script>
