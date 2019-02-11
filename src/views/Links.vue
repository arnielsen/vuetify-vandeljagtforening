<template>
  <div class="links">
    <h1 class="subheading">Links</h1>

    <v-container class="my-5">
      
      <v-card flat>
        <v-layout row class="pa-3">
          
          <v-flex md12>
            <v-list>
              <v-list-tile v-bind:href="item.url" target="_blank" v-for="item in links" :key="item.title">
                
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.categories"></v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-avatar>
                  <v-icon >open_in_new</v-icon>
                </v-list-tile-avatar>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-card>

    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class Members extends Vue {
  links: any[];

  constructor() {
    super();
    this.links = [
      { title: 'Østjysk våbenhandel', url: 'https://www.huntinglife.net/', categories: ['Jagtbutik']},
      { title: 'Jagttegn.dk', url: 'https://jagttegn.dk', categories: ['Jagt'] },
      { title: 'Danmark Jægerforbund', url: 'https://www.jaegerforbundet.dk/', categories: ['Jagt'] },
      { title: 'Randbøl Jagtforening', url: 'http://www.randboel-jagtforening.dk/', categories: ['Jagtforening', 'Skydebane'] },
      { title: 'Vingsted skydebaner', url: 'https://skydebaneforeningen.dk/Vingsted-skydebaner', categories: ['Skydebane'] }
      //{ title: '', url: '', categories: [''] }
    ]
  }
}
</script>