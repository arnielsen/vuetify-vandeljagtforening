<template>
  <div class="activies">
    <h1 class="subheading mt-4">Aktiviteter</h1>

    <v-container>

      <v-card flat v-for="activity in activities" :key="activity.title">
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
            <div>{{ activity.startdate }}</div>
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

@Component({
  components: {

  },
})
export default class Members extends Vue {
  activities: any[];

  constructor() {
    super();
    this.activities = [
      { title: 'Generalforsamling 2018-19', description: '...', startdate: '22-02-2019', url: 'https://www.facebook.com/events/200612673995046/' },
      { title: 'Fællesjagt 2018', description: '...', startdate: '24-11-2018', url: 'https://www.facebook.com/events/223732891551015/' },
      { title: 'Havjagt december 2018', description: '...', startdate: '04-11-2018', url: 'https://www.facebook.com/events/282574922385346/' },
      { title: 'Pokalskydning 2018', description: '...', startdate: '01-09-2018', url: 'https://www.facebook.com/events/930697830388357/' },
      
      //{ title: '', description: '', startdate: '', url: '' },
    ]
  }

}
</script>
