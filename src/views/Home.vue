<template>

  <div class="home">
    <h1 class="subheading mt-4">Hjem</h1>

    <v-container>
      
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg4>
          <v-card flat class="text-xs-center ma-3 py-3">
            <v-card-title class="headline">Seneste aktiviter</v-card-title>       
            
            <v-list>
              <v-list-tile v-for="activity in activities" :key="activity.title" :href="activity.url" target="_blank"> 
                <v-list-tile-content>
                  <v-list-tile-title v-html="activity.title"></v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-icon>open_in_new</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>

            <v-card-actions>
              <v-btn route to="/activities" flat color="green">Vis alle</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg8>
          <v-card flat class="ma-3">
            <v-img
              :src="`/pictures/${randomNumber}.jpg`"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Find os på Facebook</h3>
                <div>Her vil du kunne finde seneste nyheder, begivenheder...</div>
              </div>
            </v-card-title> 
            <v-card-actions>
              <v-btn flat color="green" href="https://www.facebook.com/vandeljagtforening" target="_blank">Klik her</v-btn>
            </v-card-actions>      
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class Home extends Vue {
  randomNumber: Number;
  activities: any[];

  constructor() {
    super();
    this.randomNumber = this.getRandomNumber();
    this.activities = [
      { title: 'Generalforsamling 2018-19', description: '...', startdate: '22-02-2019', url: 'https://www.facebook.com/events/200612673995046/' },
      { title: 'Fællesjagt 2018', description: '...', startdate: '24-11-2018', url: 'https://www.facebook.com/events/223732891551015/' },
      { title: 'Havjagt december 2018', description: '...', startdate: '04-11-2018', url: 'https://www.facebook.com/events/282574922385346/' },
      { title: 'Pokalskydning 2018', description: '...', startdate: '01-09-2018', url: 'https://www.facebook.com/events/930697830388357/' },
      
      //{ title: '', description: '', startdate: '', url: '' },
    ]
  }

  /**
   * Used to retrieve a random picture
   */
  private getRandomNumber() {
    return Math.floor(Math.random() * Math.floor(12));
  }
}
</script>
