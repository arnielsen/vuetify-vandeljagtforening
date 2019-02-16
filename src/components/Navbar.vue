<template>
  <nav>

    <v-toolbar app fixed flat color="green">
    <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-sm-and-down"></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
        <span>Vandel</span>
        <span class="font-weight-light">Jagtforening</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app>
        <v-list>
            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route" active-class="green--text">
                <v-list-tile-action>
                    <v-icon color="green">{{ link.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>

  </nav>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class NavBar extends Vue {
  drawer: boolean;
  links: any[];

  constructor() {
    super();
    this.drawer = false;
    this.links = [
            { icon: 'home', text: 'Hjem', route: '/' },
            { icon: 'calendar_today', text: 'Aktiviteter', route: '/activities' },
            { icon: 'group', text: 'Medlemmer', route: '/members' },
            // { icon: 'local_see', text: 'Albums', route: '/albums' },
            { icon: 'explore', text: 'Historie', route: '/history' },
            { icon: 'collections_bookmark', text: 'Links', route: '/links' },
            { icon: 'security', text: 'Persondata', route: '/privacy' }
        ];
  }

}
</script>