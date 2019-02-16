<template>
  <v-app>
    <Navbar />

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>

    <BottomNav />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';

export default {
  name: 'App',
  components: {
    Navbar,
    BottomNav
  },
  data () {
    return {
      //
    }
  }
}
</script>
