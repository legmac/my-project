<template>
  <div id="app">
    <h2>Form input</h2>
    <app-onoff v-model="switched"></app-onoff>

<div>
  <h3 v-if="switched">Component is enables</h3>
  <h3 v-else>Component is disabled</h3>
</div>

  </div>
</template>

<script>
import ListMixin from "./listMixin";
import OnOff from "./OnOff.vue";
export default {
  name: "app",
  data() {
    return{
        switched: false
    }
  },
  components:{
    appOnoff: OnOff
  }
};
</script>

<style scoped>
textarea {
  height: 100px;
  width: 400px;
}
p {
  white-space: pre;
}
</style>>
</style>
