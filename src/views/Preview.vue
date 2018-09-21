<template>
  <v-container fluid grid-list-md pa-0 dark>
    <v-layout fluid class="grey darken-3 pa-2" dark>
      <h4 class=" text-uppercase font-weight-black grey--text test--lighten-5 ma-2">Preview : Document tile</h4>
      <v-layout align-start justify-end row wrap>
        <v-btn dark color="primary" small>
          <v-icon>gesture</v-icon>
          Sign
        </v-btn>
        <v-btn small icon flat dark><v-icon>save_alt</v-icon></v-btn>
        <v-btn small icon flat dark><v-icon>share</v-icon></v-btn>
        <v-btn small icon flat dark><v-icon>send</v-icon></v-btn>
        <v-btn small color="grey lighten-1" disabled><v-icon>keyboard_arrow_left</v-icon> Back to contract</v-btn>
      </v-layout>
    </v-layout>
    <v-container  grid-list-md>

      <v-flex>
        <v-card class="elevation-3">
          <v-card-title primary-title>
            <div class="headline">Unlimited music now</div>
            <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-container>

    <v-btn
            fab
            bottom
            right
            color="blue lighten-1"
            dark
            fixed
            @click="dialog = !dialog"
    >
      <v-icon>gesture</v-icon>
    </v-btn>
  </v-container>
</template>
