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
        v-for="(theme, i) in filteredThemes"
        class="pl-10"
        @click="clickListItem(theme)"
        link
        :key="i"
      >
        <v-list-item-action>
          <v-icon :color="theme.color">
            {{ `mdi-circle${theme.name === "Light" ? "-outline" : ""}` }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-flex class="d-flex">
            <v-list-item-title>{{ theme.name }}</v-list-item-title>
            <v-switch
              v-if="theme.name === 'Dark'"
              v-model="darkTheme"
              @click="clickListItem(theme)"
              inset
            ></v-switch>
          </v-flex>
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
      darkTheme: false,
      themesSwapped: false,
      themes
    }
  },
  methods: {
    swapColors (newTheme) {
      this.$vuetify.theme.themes.light = newTheme.themes.light
      this.$vuetify.theme.themes.dark = newTheme.themes.dark
    },
    clickListItem (theme) {
      if (theme.name === "Dark") {
        this.darkTheme = !this.darkTheme
      } else {
        this.swapColors(theme)
      }
    }
  },
  watch: {
    darkTheme (newVal) {
      if (newVal) {
        this.$vuetify.theme.light = false
        this.$vuetify.theme.dark = true
      } else {
        this.$vuetify.theme.light = true
        this.$vuetify.theme.dark = false
      }
    }
  },
  computed: {
    filteredThemes () {
      let themes = {}
      Object.keys(this.themes).forEach((key, i) => {
        if (i > 0) {
          themes[key] = this.themes[key]
        }
      })
      return themes
    }
  }
}
</script>

