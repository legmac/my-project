<template>
  <div id="app">
  <!-- <h2>{{title| uppercase}}</h2>
  <h2>{{title| lowercase}}</h2>
  <h2>{{title| lowercase | uppercase}}</h2> -->
  
  <input type="text" v-model="searchName">
  
  <ul>
    <li v-for="pers of filteredNames">{{pers}}</li>
  </ul>

  <hr>
  <app-list></app-list>
  </div>
</template>

<script>
import ListMixin from './listMixin'
export default {
  name: 'app',
  data () {
    return {
      title: 'Welcome to Your Vue.js App',
     
    }
  },
  mixins: [ListMixin],  
  filters:{
    lowercase(value){
      return value.toLowerCase()
    }
  }
}
</script>

<style>

</style>
