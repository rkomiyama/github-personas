<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>GitHub&nbsp;</span>
        <span class="font-weight-light">PERSONAS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field></v-text-field>
    </v-app-bar>

    <v-content>
      <ProfileBioContainer/>
    </v-content>
  </v-app>
</template>

<script>
import ProfileBioContainer from './components/ProfileBioContainer';

export default {
  name: 'App',
  components: {
    ProfileBioContainer,
  },
  created () {
    this.$vuetify.theme.dark = true
  },
};
</script>
