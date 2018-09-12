<template>
    <v-app id="inspire">
        <v-navigation-drawer
                :clipped="$vuetify.breakpoint.lgAndUp"
                v-model="drawer"
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

        <v-toolbar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                color="white"
                app
                fixed
        >
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span class="hidden-sm-and-down">Contract Manager</span>
            </v-toolbar-title>
            <v-text-field
                    flat
                    solo-inverted
                    hide-details
                    prepend-inner-icon="search"
                    label="Search"
                    class="hidden-sm-and-down"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>notifications</v-icon>
            </v-btn>
            <v-menu bottom left >
                <v-btn icon large slot="activator">
                    <v-avatar size="32px" tile>
                        <img
                                src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                                alt="Vuetify"
                        >
                    </v-avatar>
                </v-btn>
                <v-list>
                    <v-list-tile
                            v-for="(item, i) in items"
                            :key="i"
                            @click=""
                    >
                        <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>


        <v-content>
            <v-conainer color="primary">
                <v-breadcrumbs color="primary">
                    <v-icon slot="divider">chevron_right</v-icon>

                    <v-breadcrumbs-item
                            v-for="item in items"
                            :key="item.text"
                    >
                        {{ item.text }}
                    </v-breadcrumbs-item>
                </v-breadcrumbs>
            </v-conainer>

            <v-container>
                <v-layout align-start justify-end  row wrap>
                    <v-btn color="primary" ><v-icon>library_add</v-icon> Add new Project</v-btn>
                    <v-btn disabled >export</v-btn>
                </v-layout>
            </v-container>
            <v-container fluid fill-height grid-list-md>

                <v-layout align-start>
                    <v-flex xs12 sm6 md2>
                        <v-card >
                            <v-card-title primary-title>
                                <div>
                                <h3 class="headline">Projet de Test</h3>
                                    <span class="grey--text"><small>Located two hours south of Sydney in the <br><b>Southern</b> Highlands of New South Wales, ...</small></span>
                                </div>
                            </v-card-title>
                            <v-card-actions class="pa-3">
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                    <v-icon>open_in_new</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>share</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm4 md2>
                        <v-card>
                            <v-card-title>
                                <div>
                                <h3 class="headline">Projet de Test</h3>
                                    <span class="grey--text"><small>Located two hours south of Sydney in the <br><b>Southern</b> Highlands of New South Wales, ...</small></span>
                                </div>
                            </v-card-title>
                            <v-card-actions class="pa-1">
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                    <v-icon>open_in_new</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>share</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>



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
                    </v-flex><v-flex xs12 sm4 md2>
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

        </v-content>
        <v-btn
                fab
                bottom
                right
                color="blue lighten-1"
                dark
                fixed
                @click="dialog = !dialog"
        >
            <v-icon>add</v-icon>
        </v-btn>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            drawer: null,
            items: [
                { icon: 'dashboard', text: 'Overview' },
                { icon: 'assignment', text: 'Contrats' },
                { icon: 'folder', text: 'Documents' },
                { icon: 'contacts', text: 'Contacts' },
                { icon: 'history', text: 'Historique' },
                { icon: 'timeline', text: 'Statistiques' },
                { icon: 'style', text: 'Taxonomies'},
                { icon: 'photo_library', text: 'Templates'},
                {
                    icon: 'keyboard_arrow_up',
                    'icon-alt': 'keyboard_arrow_down',
                    text: 'Labels',
                    model: true,
                    children: [
                        { icon: 'add', text: 'Create label' }
                    ]
                },
                {
                    icon: 'keyboard_arrow_up',
                    'icon-alt': 'keyboard_arrow_down',
                    text: 'More',
                    model: false,
                    children: [
                        { text: 'Import' },
                        { text: 'Export' },
                        { text: 'Print' },
                        { text: 'Undo changes' },
                        { text: 'Other contacts' }
                    ]
                },
                { icon: 'settings', text: 'Settings' },
                { icon: 'chat_bubble', text: 'Send feedback' },
                { icon: 'help', text: 'Help' },
                { icon: 'phonelink', text: 'App downloads' },

            ]
        }),
        props: {
            source: String
        }
    }
</script>
