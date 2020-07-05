<template>
  <div>
      <h4>Car name: {{$route.query.name}}</h4>
      <h5>Car year: {{year}}</h5>

      <div class="scroll"></div>
      <h6 id="sc">Hellow</h6>
      <div class="scroll"></div>
  </div>
</template>

<script>
export default {
    computed:{
        year(){
            return this.$route.query.year
        }
    }
  
};
</script>

<style>
.scroll{
    height: 1000px;
    width: 100px;
    background-color: #ccc;
}
</style>