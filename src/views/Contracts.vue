<template>
  <v-container fluid grid-list-md pa-0>
    <v-layout fluid class="grey darken-3">
      <v-flex text-xs-center >
        <v-layout align-start justify-end row wrap>
          <v-btn dark color="purple lighten-1">
            <v-icon>library_add</v-icon>
            Add new template
          </v-btn>
          <v-btn disabled>export</v-btn>
        </v-layout>
        <v-layout align-start row wrap ma-3 justify-center dark>
          <v-flex xs12 sm6 md1>
            <v-card height="200">
              <v-responsive class="text-xs-center pa-5" aspect-ratio="0.8">
                  <v-icon x-large right color="primary">add</v-icon>
                <v-card-actions class="pa-1">
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-responsive>
            </v-card>
            <h4 class="text-white text-xs-left ma-2 white--text">Blank</h4>
          </v-flex>
          <v-flex xs12 sm6 md1 v-for="i in 5" key="6${i}">
            <v-card height="200">
              <v-responsive>

                <v-card-title primary-title>
                  <v-img
                          src="https://cdn-images-1.medium.com/max/800/1*n_vfzwQ4a8SMJ0dMRagnXg.png"
                          aspect-ratio="0.8"
                  ></v-img>
                </v-card-title>
                <v-card-actions class="pa-1">
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-responsive>
            </v-card>
            <h4 class="text-white text-xs-left ma-2 white--text">Titre
            <small><br/>Category</small></h4>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-container fluid grid-list-md>
    <v-responsive color="primary" dark>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-1 grey--text">Other options</h3>
        </v-flex>
      </v-layout>
    </v-responsive>
   <!-- <v-layout row>
      <v-data-table
              :items="desserts"
              class="elevation-1"
              hide-actions
              hide-headers
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">
            <el-button
                    size="mini"
                    @click="handleDelete(scope.$index, props.item)">Edit</el-button>
            <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, props.item)">Delete</el-button></td>
        </template>
      </v-data-table>
      <v-divider></v-divider>
-->
      <v-data-table
              :headers="headers"
              :items="desserts"
              class="elevation-0 transparent"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.calories }}</td>
          <td>{{ props.item.fat }}</td>
          <td>{{ props.item.carbs }}</td>
          <td><v-chip label outline  color="teal">Confirmed</v-chip></td>
          <td class="text-xs-right">
            <v-menu bottom left>
              <v-btn icon ripple
                     slot="activator"
                     dark>
                <v-icon color="grey">more_vert</v-icon>
              </v-btn>
              <v-list dense>
                <v-list-tile @click="">
                  <v-list-tile-title><v-icon small>tv</v-icon> View</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title><v-icon small>visibility</v-icon> Preview</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title><v-icon small>get_app</v-icon> Download</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title><v-icon small>gesture</v-icon> Manage Signatures</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title><v-icon small>create</v-icon> Edit</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title><v-icon small>delete_outline</v-icon> delete</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </td>
        </template>
      </v-data-table>

    </v-layout>
    </v-container>
  </v-container>
</template>

<style>
  .transparent > .v-table,
  .transparent > .v-table__overflow > .v-datatable,
  .transparent > .v-table > .v-datatable__actions {
    background-color: transparent;
  }
</style>
<script>
	export default {
		data () {
			return {
				desserts: [
					{
						value: false,
						name: 'Frozen Yogurt',
						calories: 159,
						fat: 6.0,
						carbs: 24,
						protein: 4.0,
						iron: '1%'
					},
					{
						value: false,
						name: 'Ice cream sandwich',
						calories: 237,
						fat: 9.0,
						carbs: 37,
						protein: 4.3,
						iron: '1%'
					},
					{
						value: false,
						name: 'Eclair',
						calories: 262,
						fat: 16.0,
						carbs: 23,
						protein: 6.0,
						iron: '7%'
					},
					{
						value: false,
						name: 'Cupcake',
						calories: 305,
						fat: 3.7,
						carbs: 67,
						protein: 4.3,
						iron: '8%'
					},
					{
						value: false,
						name: 'Gingerbread',
						calories: 356,
						fat: 16.0,
						carbs: 49,
						protein: 3.9,
						iron: '16%'
					},
					{
						value: false,
						name: 'Jelly bean',
						calories: 375,
						fat: 0.0,
						carbs: 94,
						protein: 0.0,
						iron: '0%'
					},
					{
						value: false,
						name: 'Lollipop',
						calories: 392,
						fat: 0.2,
						carbs: 98,
						protein: 0,
						iron: '2%'
					},
					{
						value: false,
						name: 'Honeycomb',
						calories: 408,
						fat: 3.2,
						carbs: 87,
						protein: 6.5,
						iron: '45%'
					},
					{
						value: false,
						name: 'Donut',
						calories: 452,
						fat: 25.0,
						carbs: 51,
						protein: 4.9,
						iron: '22%'
					},
					{
						value: false,
						name: 'KitKat',
						calories: 518,
						fat: 26.0,
						carbs: 65,
						protein: 7,
						iron: '6%'
					}
				],
				headers: [
					{
						text: 'Dessert (100g serving)',
						align: 'left',
						sortable: false,
						value: 'name'
					},
					{ text: 'Description', value: 'description' },
					{ text: 'Type', value: 'type' },
					{ text: 'Carbs (g)', value: 'nb_users' },
					{ text: 'Statut', value: 'status' },
					{ text: 'Actions', value: 'name', sortable: false }
				],
			}
		}
	}
</script>