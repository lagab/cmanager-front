<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex md2>
        <v-card>
          <v-navigation-drawer
                  floating
                  permanent
                  stateless
                  value="true"
          >
            <v-list dense>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Home</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Recent</v-list-tile-title>
              </v-list-tile>
              <v-divider />
              <v-list-tile
                      v-for="item in items"
                      :key="item.title"
                      @click=""
              >
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
        </v-card>

      </v-flex>
      <v-flex md10>
        <v-list dense class="transparent">
          <v-list-tile
                  v-for="item in items"
                  :key="item.title"
                  avatar
                  @click=""
          >
            <v-list-tile-avatar>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-menu bottom left>
                <v-btn icon ripple
                       slot="activator"
                       dark>
                  <v-icon color="grey lighten-1">more_vert</v-icon>
                </v-btn>
                <v-list dense>
                  <v-list-tile @click="">
                    <v-list-tile-title><v-icon>visibility</v-icon> view</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="">
                    <v-list-tile-title><v-icon>create</v-icon> edit</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="">
                    <v-list-tile-title><v-icon>delete_outline</v-icon> delete</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile
                  v-for="item in items"
                  :key="item.title"
                  avatar
                  @click=""
          >
            <v-list-tile-avatar>
              <v-icon>contacts</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-menu bottom left>
                <v-btn icon ripple
                       slot="activator"
                       dark>
                  <v-icon color="grey lighten-1">more_vert</v-icon>
                </v-btn>
                <v-list dense>
                  <v-list-tile @click="">
                    <v-list-tile-title><v-icon>visibility</v-icon> view</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="">
                    <v-list-tile-title><v-icon>create</v-icon> edit</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="">
                    <v-list-tile-title><v-icon>delete_outline</v-icon> delete</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile
                  v-for="item in items"
                  :key="item.title"
                  avatar
                  v-link='{name: "about"}'
          >
            <v-list-tile-avatar>
              <v-icon>perm_identity</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-menu bottom left>
              <v-btn icon ripple
                slot="activator"
                dark>
                <v-icon color="grey lighten-1">more_vert</v-icon>
              </v-btn>
              <v-list dense>
                <v-list-tile @click="">
                  <v-list-tile-title><v-icon>visibility</v-icon> view</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title><v-icon>create</v-icon> edit</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title><v-icon>delete_outline</v-icon> delete</v-list-tile-title>
                </v-list-tile>
              </v-list>
              </v-menu>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
	export default {
		data () {
			return {
				items: [
					{ icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
					{ icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
					{ icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
				],
				items2: [
					{ icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
					{ icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
				]
			}
		}
	}
</script>
