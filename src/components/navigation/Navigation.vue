<template>
  <v-navigation-drawer
  :clipped="$vuetify.breakpoint.lgAndUp"
  :value="drawer"
  @input="toggleShow"
  fixed
  app
  >
  <v-list dense>
    <template v-for="item in items">
      <v-layout
      v-if="item.heading"
      :key="item.heading"
      row
      align-center
      >
      <v-flex xs6>
        <v-subheader v-if="item.heading">
          {{ item.heading }}
        </v-subheader>
      </v-flex>
      <v-flex xs6 class="text-xs-center">
        <a href="#!" class="body-2 black--text">EDIT</a>
      </v-flex>
    </v-layout>
    <v-list-group
    v-else-if="item.children"
    v-model="item.model"
    :key="item.text"
    :prepend-icon="item.model ? item.icon : item['icon-alt']"
    append-icon=""
    >
    <v-list-tile slot="activator">
      <v-list-tile-content>
        <v-list-tile-title>
          {{ item.text }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile
    v-for="(child, i) in item.children"
    :key="i"
    @click=""
    >
    <v-list-tile-action v-if="child.icon">
      <v-icon>{{ child.icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>
        {{ child.text }}
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</v-list-group>
<v-list-tile v-else :key="item.text" @click="">
  <v-list-tile-action>
    <v-icon>{{ item.icon }}</v-icon>
  </v-list-tile-action>
  <v-list-tile-content>
    <v-list-tile-title>
      {{ item.text }}
    </v-list-tile-title>
  </v-list-tile-content>
</v-list-tile>
</template>
</v-list>
</v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Navigation',
  data: () => ({
    dialog: false,
    items: [
      {icon: 'dashboard', text: 'Overview'},
      {icon: 'assignment', text: 'Contrats'},
      {icon: 'folder', text: 'Documents'},
      {icon: 'contacts', text: 'Contacts'},
      {icon: 'history', text: 'Contrats récents'},
      {icon: 'timeline', text: 'Statistiques'},
      {icon: 'style', text: 'Taxonomies'},
      {icon: 'photo_library', text: 'Templates'},
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Labels',
        model: true,
        children: [
          {icon: 'add', text: 'Create label'}
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'More',
        model: false,
        children: [
          {text: 'Import'},
          {text: 'Export'},
          {text: 'Print'},
          {text: 'Undo changes'},
          {text: 'Other contacts'}
        ]
      },
      {icon: 'settings', text: 'Settings'},
      {icon: 'chat_bubble', text: 'Send feedback'},
      {icon: 'help', text: 'Help'},
      {icon: 'phonelink', text: 'App downloads'},

    ]
  }),
  methods:{
    ...mapActions({
      toggleNavigation: 'toggleNavigation',
    }),
    toggleShow (val) {
      if (val ? !this.drawer : this.drawer) {
        this.toggleNavigation()
      }
      return this.drawer
    },

  },
  computed: {
    ...mapState({
      drawer: state => state.drawer
    })
  },
  props: {
    source: String
  }
}
</script>
