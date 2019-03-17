<template>

  <div class="home">
    <h1 class="subheading mt-4">Hjem</h1>

    <v-container>
      
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg4>
          <v-card flat class="text-xs-center ma-3 py-3">
            <v-card-title class="headline">Aktiviteter 2019</v-card-title>       
            
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
                <div>Hvis du ønsker at følge med i foreningens aktiviteter, eller ønsker du at være medlem så følg os på Facebook og kontakt os derigennem.</div>
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
      { title: 'Bukkemorgen', description: '...', startdate: new Date('04-16-2019'), url: 'https://www.facebook.com/events/2295528093864580/' },
      { title: 'Arbejdsdag', description: '...', startdate: new Date('04-25-2019'), url: 'https://www.facebook.com/events/1996599430636996/' },
      { title: 'Fællesjagt', description: '...', startdate: new Date('11-30-2019'), url: 'https://www.facebook.com/events/255424648698593/' },
      { title: 'Generalforsamling 2019-20', description: '...', startdate: new Date('02-21-2020'), url: 'https://www.facebook.com/events/301200003890057/' },
      
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
