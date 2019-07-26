<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <NavDrawer />
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase hidden-xs-only">
        <v-flex class="d-flex align-center">
          <v-img
            class="hidden-sm-and-down"
            :src="require('./assets/github.svg')"
            height="64px"
          />
          <span>GitHub&nbsp;</span>
          <span class="font-weight-light">PERSONAS</span>
        </v-flex>
      </v-toolbar-title>
      <v-spacer class="hidden-xs-only"></v-spacer>
      <v-text-field
        v-model="searchField"
        @change="searchUser"
        prepend-icon="mdi-account-search"
        hide-details
      >
      </v-text-field>
    </v-app-bar>
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
    ProfileBioContainer,
  },
  created () {
    this.$vuetify.theme.dark = true
  },
};
</script>
