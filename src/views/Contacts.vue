<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex offset-md2 md10 >
          <div class="header">
              <h2>Contacts</h2>
          </div>
      </v-flex>
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
              <v-list-tile-title>{{ item.title }} <small>(200)</small></v-list-tile-title>
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
              <v-list-tile-title>{{ item.title }} <small>(15)</small></v-list-tile-title>
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
              <v-icon>perm_identity</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }} <small>&lt;email@test.com></small></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-menu bottom left>
              <v-btn icon ripple
                slot="activator"
                dark>
                <v-icon color="grey lighten-1">more_vert</v-icon>
              </v-btn>
              <v-list dense>
                <v-list-tile @click.native="viewdialog = true">
                  <v-list-tile-title ><v-icon>visibility</v-icon> view</v-list-tile-title>
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
      <v-dialog v-model="viewdialog" persistent max-width="600px">
          <v-card>
              <v-card-title color="grey lighten-5">
                  <span class="headline text-sm-center">Contact Info</span>
              </v-card-title>
              <v-card-text>
                  <v-container fluid grid-list-md>
                      <v-form v-model="valid">
                      <v-layout wrap>
                          <v-flex xs12 sm6 md6>
                              <v-text-field label="First name" required></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6 md6>
                              <v-text-field label="Last name" hint="example of helper text only on focus"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                              <v-text-field label="Email" type="email" required dense></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                              <v-select
                                      :items="genders"
                                      label="Genre"
                                      dense
                              ></v-select>
                          </v-flex>
                          <!--<v-flex :if="false">
                              <v-data-table
                                      :items="items2"
                                      :headers="headers"
                                      hide-actions
                              >
                                  <template slot="items" slot-scope="props">
                                      <td>
                                          <v-edit-dialog
                                                  :return-value.sync="props.item.title"
                                                  lazy
                                                  @save="save"
                                                  @cancel="cancel"
                                                  @open="open"
                                                  @close="close"
                                          > {{ props.item.title }}
                                              <v-text-field
                                                      slot="input"
                                                      v-model="props.item.title"
                                                      :rules="[max25chars]"
                                                      label="Edit"
                                                      single-line
                                                      counter
                                              ></v-text-field>
                                          </v-edit-dialog>
                                      </td>
                                      <td>
                                          <v-edit-dialog
                                                  :return-value.sync="props.item.subtitle"
                                                  lazy
                                                  @save="save"
                                                  @cancel="cancel"
                                                  @open="open"
                                                  @close="close"
                                          > {{ props.item.subtitle }}
                                              <v-text-field
                                                      slot="input"
                                                      v-model="props.item.subtitle"
                                                      :rules="[max25chars]"
                                                      label="Edit"
                                                      single-line
                                                      counter
                                              ></v-text-field>
                                          </v-edit-dialog>
                                      </td>
                                  </template>
                              </v-data-table>
                          </v-flex>-->
                      </v-layout>
                      </v-form>
                  </v-container>
              </v-card-text>
              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click.native="viewdialog = false">Close</v-btn>
                  <v-btn color="primary" @click.native="viewdialog = false">Save</v-btn>
              </v-card-actions>
          </v-card>
      </v-dialog>
  </v-container>
</template>

<script>
		export default {
			data () {
			return {
				viewdialog: false,
				items: [
					{ icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
					{ icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
					{ icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
				],
				items2: [
					{ icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
					{ icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
				],
				headers: [
					{ text: 'Label', value: 'Jan 20, 2014' },
					{ text: 'Value', value: 'Jan 10, 2014' }
				],
                genders: [
				    { text: 'Unknow', value: 'UNKNOW' },
				    { text: 'Male', value: 'MALE' },
				    { text: 'Female', value: 'FEMALE' }
                ]
			}
		}
	}
</script>
