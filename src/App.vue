<template>
  <div id="app">
     <!-- <app-onoff></app-onoff> -->
     <!-- <app-l81></app-l81> -->
     <app-l9></app-l9>
  </div>
</template>

<script>
// import OnOff from "./OnOff.vue";
import L81 from "./valid_l8.vue"
import L9 from './l9_route.vue'
export default {
  components:{
    //  appOnoff: OnOff,
     appL81: L81,
     appL9 : L9
  }
};
</script>

<style scoped>

</style>
