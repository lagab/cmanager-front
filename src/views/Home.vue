<template>
  <v-container fluid grid-list-md>
    <v-layout align-start justify-end row wrap>
      <v-btn color="primary">
        <v-icon>library_add</v-icon>
        Add new Project
      </v-btn>
      <v-btn disabled>export</v-btn>
    </v-layout>
    <v-layout align-start row wrap>
    <v-flex xs12 sm6 md2 v-for="i in 15" key="6${i}">
      <v-card>
        <v-responsive>
          <v-card-title primary-title>
            <div>
              <h3 class="headline">Projet de Test</h3>
              <span class="grey--text"><small>Located two hours south of Sydney in the <br><b>Southern</b> Highlands of New South Wales, ...</small></span>
            </div>
          </v-card-title>
          <v-card-actions class="pa-1">
            <v-avatar v-for="i in 5" key="6${i}" size="22" class="ma-1">
                <img src="http://api.randomuser.me/portraits/thumb/women/26.jpg" alt=" " />
            </v-avatar>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
              <v-spacer></v-spacer>
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
