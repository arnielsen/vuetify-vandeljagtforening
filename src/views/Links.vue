<template>
  <div class="links">
    <h1 class="subheading">Links</h1>

    <v-container class="my-5">
      
      <v-card flat>
        <v-layout row class="pa-3">
          
          <v-flex md12>
            <v-list>
              <v-list-group v-for="category in categories" :key="category.title" v-model="category.active" :prepend-icon="category.action" no-action>
                <v-list-tile slot="activator">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ category.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-bind:href="item.url" target="_blank" v-for="item in category.items" :key="item.title">
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-group>
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
  categories: any[];

  constructor() {
    super();
      this.categories = [
      {
        action: 'pets',
        title: 'Jagt',
        items: [
          { 
            title: 'Jagttegn.dk',
            url: 'https://jagttegn.dk'
          },
          { 
            title: 'Danmark Jægerforbund',
            url: 'https://www.jaegerforbundet.dk/'
          }
        ]
      },
      {
        action: 'school',
        title: 'Skydebaner',
        items: [
          { 
            title: 'Vingsted skydebaner',
            url: 'https://skydebaneforeningen.dk/Vingsted-skydebaner'
          }
        ]
      },
      {
        action: 'people',
        title: 'Jagtforeninger',
        items: [
          { 
            title: 'Randbøl Jagtforening',
            url: 'http://www.randboel-jagtforening.dk/'
          }
        ]
      },
      {
        action: 'shopping_cart',
        title: 'Jagt butikker og grej',
        items: [
          { 
            title: 'Østjysk våbenhandel',
            url: 'https://www.huntinglife.net/'
          },
        ]
      },
      {
        action: 'local_activity',
        title: 'Lokalt',
        items: [
          { 
            title: "Dagli'Brugsen Vandel",
            url: 'https://www.facebook.com/DagliBrugsenVandel/'
          }
        ]
      },
    ]
  }
}
</script>