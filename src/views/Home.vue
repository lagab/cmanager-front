<template>
  <v-container fluid grid-list-md>
    <v-layout align-start justify-end row wrap>
      <v-btn color="primary">
        <v-icon>library_add</v-icon>
        Add new Project
      </v-btn>
      <v-btn disabled>export</v-btn>
    </v-layout>
    <v-layout align-start row>
      <v-flex xs12 sm6 md3>
        <v-card to="/account"
        color="transparent"
        class="elevation-0">
        <v-responsive :aspect-ratio="16/9">
          <v-card-title primary-title class="text-xs-center">
            <div><h2 class="headline "><i class="el-icon-circle-plus-outline"></i></h2></div><br/>
            <div class="grey--text"><b>New Projet</b></div>
          </v-card-title>
        </v-responsive>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md3 v-for="(o, index) in 5">
      <v-card>
        <v-responsive :aspect-ratio="16/9">
          <v-card-title primary-title>
            <div>
              <h3 class="headline">Projet de Test</h3>
              <span class="grey--text"><small>Located two hours south of Sydney in the <br><b>Southern</b> Highlands of New South Wales, ...</small></span>
            </div>
          </v-card-title>
          <v-card-actions class="pa-1">
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-card-actions>
        </v-responsive>
      </v-card>
    </v-flex>
  </v-layout>

</v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
