<template>
    <!-- Mobile nav -->
    <div>
        <v-bottom-nav fixed :value="bottomNav" active.sync="home"  class="hidden-md-and-up">
            <v-btn flat color="green" route to="/">
                <span>Hjem</span>
                <v-icon>home</v-icon>
            </v-btn>
            <v-btn flat color="green" route to="/members">
                <span>Medlemmer</span>
                <v-icon>group</v-icon>
            </v-btn>
            <v-btn flat color="green" route to="/links">
                <span>links</span>
                <v-icon>collections_bookmark</v-icon>
            </v-btn>
            <v-btn flat color="green" @click="drawer = !drawer">
                <span>Menu</span>
                <v-icon>menu</v-icon>
            </v-btn>

            
        </v-bottom-nav>
        <v-navigation-drawer right v-model="drawer" app>
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
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class BottomNav extends Vue {
  links: any[];
  bottomNav: string;
  drawer: boolean;

  constructor() {
    super();
    this.drawer = false;
    this.bottomNav = 'home';
    this.links = [
            //{ icon: 'home', text: 'Hjem', route: '/' },
            { icon: 'calendar_today', text: 'Aktiviteter', route: '/activities' },
            //{ icon: 'group', text: 'Medlemmer', route: '/members' },
            // { icon: 'local_see', text: 'Albums', route: '/albums' },
            { icon: 'explore', text: 'Historie', route: '/history' },
            //{ icon: 'collections_bookmark', text: 'Links', route: '/links' },
            { icon: 'security', text: 'Persondata', route: '/privacy' }
        ];
  }

}
</script>

