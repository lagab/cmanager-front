<template>
  <v-app id="inspire">
    <Navigation />
    <Toolbar />
    <v-content>
      <router-view />
    </v-content>
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
