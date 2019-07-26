<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      mobile-break-point=960
      app
    >
      <NavDrawer />
    </v-navigation-drawer>
    <AppBar
      @click:drawer="drawer = !drawer"
      @change:user="searchUser"
    />
    <v-content>
      <ProfileBioContainer
        v-if="user"
        :user="user"
      />
    </v-content>
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
    async searchUser (searchVal) {
      if (this.prevSearchVal === searchVal) {
        return
      }
      this.prevSearchVal = searchVal
      const userUrl = await this.searchUsername(searchVal)
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
      searchField: "",
      prevSearchVal: "",
      user: null
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
