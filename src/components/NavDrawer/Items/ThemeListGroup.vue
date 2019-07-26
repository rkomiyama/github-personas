<template>
  <v-list-group
    prepend-icon="mdi-palette-advanced"
    ripple
  >
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>
          Themes
        </v-list-item-title>
      </v-list-item-content>
    </template>
    <v-list-item-group
      v-model="themeOption"
      mandatory
    >
      <v-list-item
        v-for="(theme, i) in themes"
        class="pl-10"
        @click="swapThemes(theme)"
        link
        :key="i"
      >
        <v-list-item-action>
          <v-icon :color="theme.color">
            {{ `mdi-circle${theme.name === "Light" ? "-outline" : ""}` }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ theme.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list-group>
</template>

<script>
import themes from '@/themes'

export default {
  name: "ThemeListGroup",
  data () {
    return {
      themeOption: 0,
      themes
    }
  },
  methods: {
    swapThemes (newTheme) {
      this.$vuetify.theme.light = newTheme.light
      this.$vuetify.theme.dark = newTheme.dark
      if (newTheme.light) {
        this.$vuetify.theme.themes.light = newTheme.themes.light
      } else if (newTheme.dark) {
        this.$vuetify.theme.themes.dark = newTheme.themes.dark
      }
    }
  }
}
</script>

