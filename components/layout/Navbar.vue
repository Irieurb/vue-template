<template>
    <div>
        <v-navigation-drawer
            clipped
            fixed
            v-model="drawer"
            app
            >
            <v-list dense>
                <v-list-tile
                v-for="route in this.$router.options.routes"
                  :key="route.name"
                  :to="route.path">
                  <v-list-tile-action>
                      <v-icon>{{ route.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                      <v-list-tile-title>{{ route.name }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-toolbar>
    </div>
</template>
<script>
export default {
  data: () => ({
    drawer: null
  }),
  computed: {
    title() {
      return this.$store.getters.getTitle;
    }
  }
};
</script>
<style>
</style>
