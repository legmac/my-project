<template>
  <div>
    <h1>Car id {{id}}</h1>
    <button class="btn btn-sm btn-default mb-2" @click="goBackToCars">Back</button>
    <br />
    <!-- <router-link 
    tag='button'
    class="btn btn-sm btn-info mt-2"
    :to="'/car/'+id+'/full'"
    >Full Info  carFull
    </router-link>-->

    <router-link
      tag="button"
      class="btn btn-sm btn-info mt-2"
      :to="{name:'carFull', params:{id: id}, query:{name:'Mazda', year:200},hash:'#sc'}"
    >Full Info</router-link>
    <!-- params:{id: id}}"  peredati parametri id so znaceniem id -->
    <hr />
    <!-- Vivod otobrajenia routa -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // id: this.$router.currentRoute.params['id']
      id: this.$route.params["id"]
    };
  },
  methods: {
    goBackToCars() {
      this.$router.push("/cars");
    }
  },
  watch: {
    $route(toR, fromR) {
      this.id = toR.params["id"];
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("wtf", "router Leave");
    if(window.confirm('Are you shure leave')){
      next()
    }else{
      next(false)
    }
  }
};
</script>

<style>
</style>