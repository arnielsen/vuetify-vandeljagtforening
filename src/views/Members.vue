<template>
  <div class="members">
    <h1 class="subheading mt-4">Medlemmer</h1>

    <v-container>
      
      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('name')" slot="activator">
            <v-icon small left>person</v-icon>
            <span class="caption text-lowercase">navn</span>
          </v-btn>
          <span>Sorter medlemslisten efter navn</span>
        </v-tooltip>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="member in members" :key="member.name">
          <v-card flat class="text-xs-center ma-3 py-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img v-if="member.avatar" :src="member.avatar" :alt="member.name">
                <v-icon v-else>person</v-icon>
              </v-avatar>
            </v-responsive>
              
            <v-card-text>
              <div class="subheading">{{ member.name }}</div>
              <div class="grey--text">{{ member.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn small flat color="green" v-if="member.email" href="`mailto:`">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
              <v-btn v-else flat disabled>
                <v-icon small flat left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- <v-card flat v-for="member in members" :key="member.name">
        <v-layout row wrap class="pa-3">
          <v-flex xs12 md6>
            <div class="caption grey--text">
              Navn
            </div>
            <div>{{ member.name }}</div>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <div class="caption grey--text">
              Rolle
            </div>
            <div>{{ member.role }}</div>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-chip small v-for="membership in member.memberships" :key="membership">{{ membership }}</v-chip>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card> -->

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
  members: any[];

  constructor() {
    super();
    this.members = [
      { name: 'Svend-Aage Hansen', role: 'Formand', email: '' },
      { name: 'Morten Røndbjerg Nielsen', role: 'Kasserer', email: '' },
      { name: 'Karsten Poulsen', role: 'Næstformand', email: '' },
      { name: 'Anders Røndbjerg Nielsen', role: 'Bestyrelsesmedlem', email: 'arnielsen@outlook.dk', avatar: '/avatars/arnielsen.jpg' },
      { name: 'Dieter Thomsen', role: 'Bestyrelsesmedlem', email: '' },
      { name: 'Mogens Jensen', role: 'Suppleant', email: ''},
      { name: 'Victor Jøker', role: 'Suppleant', email: ''},
      
      // todo: membersince, badges(5 year, 10 year, honorable memberships etc)
      //{ name: '', role: '', email: ''},
    ]
  }

  /**
   * Used to sort member list
   */
  public sortBy(prop: string) {
    this.members.sort((a,b) => a[prop] < b[prop] ? -1 : 1);
  }
}
</script>
