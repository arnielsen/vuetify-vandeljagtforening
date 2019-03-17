<template>
  <div class="activies">
    <h1 class="subheading mt-4">Aktiviteter</h1>

    <v-container>

      <v-card flat v-for="activity in latestActivities()" :key="activity.title">
        <v-layout row wrap class="pa-4">
          <v-flex xs12 sm6 md6 lg8>
            <div class="caption grey--text">
              Arrangement
            </div>
            <div>{{ activity.title }}</div>
          </v-flex>
          <v-flex xs12 sm3 md3 lg2>
            <div class="caption grey--text">
              Starter den
            </div>
            <div>{{ formatStartDate(activity.startdate) }}</div>
          </v-flex>
          <v-flex xs12 sm3 md3 lg2>
            <v-spacer></v-spacer>
            <v-btn small flat color="green" :href="activity.url" target="_blank">Læs mere</v-btn>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>

    <v-container v-if="olderActivities().length > 0">
        
      <h2 class="subheading mt-4 ">Tidligere aktiviter</h2>
      <v-card flat v-for="activity in olderActivities()" :key="activity.title">
        <v-layout row wrap class="pa-4">
          <v-flex xs12 sm6 md6 lg8>
            <div class="caption grey--text">
              Arrangement
            </div>
            <div>{{ activity.title }}</div>
          </v-flex>
          <v-flex xs12 sm3 md3 lg2>
            <div class="caption grey--text">
              Starter den
            </div>
            <div>{{ formatStartDate(activity.startdate) }}</div>
          </v-flex>
          <v-flex xs12 sm3 md3 lg2>
            <v-spacer></v-spacer>
            <v-btn small flat color="green" :href="activity.url" target="_blank">Læs mere</v-btn>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';

@Component({
  components: {

  },
})
export default class Activities extends Vue {
  activities: any[];

  constructor() {
    super();
    
    // Set moment language
    moment.locale('da');
    
    // Set activites
    this.activities = [
      { title: 'Bukkemorgen', description: '...', startdate: new Date('04-16-2019'), url: 'https://www.facebook.com/events/2295528093864580/' },
      { title: 'Arbejdsdag', description: '...', startdate: new Date('04-25-2019'), url: 'https://www.facebook.com/events/1996599430636996/' },
      { title: 'Fællesjagt', description: '...', startdate: new Date('11-30-2019'), url: 'https://www.facebook.com/events/255424648698593/' },
      { title: 'Generalforsamling 2019-20', description: '...', startdate: new Date('02-21-2020'), url: 'https://www.facebook.com/events/301200003890057/' },
      
      //{ title: '', description: '', startdate: '', url: '' },
    ]
  }

  /**
   * Returns upcoming activities
   */
  public latestActivities() : any {
    return this.activities.filter(function(activity) {
      if(moment(activity.startdate).isSameOrAfter(moment())) 
        return activity
    });
  }

  /**
   * Returns older activities
   */
  public olderActivities() : any {
    return this.activities.filter(function(activity) {
      if(moment(activity.startdate).isSameOrBefore(moment()))
        return activity;
    })
  }

  /**
   * Returns a date formatted string
   */
  public formatStartDate(date: Date) : string {
    return moment(date).format("MMMM Do YYYY");
  }

}
</script>
