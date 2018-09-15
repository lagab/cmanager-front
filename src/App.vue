<template>
  <v-app id="inspire">
    <Navigation />
    <Toolbar />
    <v-content>
      <v-layout fluid class="primary">
        <v-flex text-xs-center >
          <h3 class="display-2" >Custom Color</h3>
        </v-flex>
      </v-layout>
      <router-view />
    </v-content>

    <v-btn
    fab
    bottom
    right
    color="blue lighten-1"
    dark
    fixed
    @click="dialog = !dialog"
    >
    <v-icon>add</v-icon>
  </v-btn>
</v-app>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import  Navigation from '@/components/navigation/Navigation.vue';
import  Toolbar from '@/components/navigation/Toolbar.vue';

export default {
  data: () => ({
    dialog: false,
    drawer2: null,
    items: [
      {icon: 'contact', text: 'Account'},
      {icon: 'folder', text: 'Settings'},
      {icon: 'contacts', text: 'logout'},
    ]
  }),
  components: {
    Navigation,
    Toolbar,
  },
  methods: {
    ...mapActions(['toggleNavigation'])
  },
  props: {
    source: String
  }
}
</script>
