<template>
  <v-container fluid grid-list-md pa-0>
    <v-container fluid grid-list-md>
    <v-responsive color="primary" dark>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-1 grey--text">Other options</h3>
        </v-flex>
      </v-layout>
    </v-responsive>
    <v-layout justify-center>
      <v-flex xs12 sm4 md2>
        <v-card color="cyan accent-4" dark height="210">
          <v-img
          src="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png"
          aspect-ratio="2.75"
          ></v-img>
          <v-card-title>
            <div>
              <h3 class="headline">Storage</h3>
              <span><small>Stockez et récupérez des contenus générés par des utilisateurs</small></span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 md2>
        <v-card color="purple lighten-1" dark height="210">
          <v-img
          src="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png"
          aspect-ratio="2.75"
          ></v-img>
          <v-card-title>
            <div>
              <h3 class="headline">Authentication</h3>
              <span><small>Authentifiez et gérez les utilisateurs.</small></span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 md2>
        <v-card color="teal lighten-1" dark height="210">
          <v-img
          src="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/testlab.png"
          aspect-ratio="2.75"
          ></v-img>
          <v-card-title>
            <div>
              <h3 class="headline">Signatures</h3>
              <span><small>Authentifiez et gérez les utilisateurs.</small></span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 md2>
        <v-card color="deep-orange darken-1" dark height="210">
          <v-img
          src="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/analytics.png"
          aspect-ratio="2.75"
          ></v-img>
          <v-card-title>
            <div>
              <h3 class="headline">Analytics</h3>
              <span><small>Authentifiez et gérez les utilisateurs.</small></span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </v-container>
</template>
