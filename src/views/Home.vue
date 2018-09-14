<template>
    <v-container fluid grid-list-md>
        <v-layout align-start justify-end row wrap>
            <v-btn color="primary">
                <v-icon>library_add</v-icon>
                Add new Project
            </v-btn>
            <v-btn disabled>export</v-btn>
        </v-layout>
        <v-layout align-start>
            <v-flex xs12 sm6 md2>
                <v-card>
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
                </v-card>
            </v-flex>
            <v-flex xs12 sm4 md2>
                <v-card>
                    <v-card-title>
                        <div>
                            <h3 class="headline">Projet de Test</h3>
                            <span class="grey--text"><small> Located two hours south of Sydney in the <br><b>Southern</b> Highlands of New South Wales, ...</small></span>
                        </div>
                    </v-card-title>
                    <v-card-actions class="pa-1">
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                    </v-card-actions>
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
