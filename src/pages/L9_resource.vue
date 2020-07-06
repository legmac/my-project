<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">Car name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName" />
    </div>

    <div class="form-group">
      <label for="name">Car year</label>
      <input type="text" id="year" class="form-control" v-model.number="carYer" />
    </div>

    <button class="btn btn-success" @click="createCar">Create car</button>

    <button class="btn btn-primary" @click="LoadCars">Load cars</button>
    <br />
    <ul class="list-group">
      <li class="list-group-item" v-for="car in cars" :key="car.id">
        <strong>{{car.name}}</strong>
        - {{car.yaer}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carName: "",
      carYer: 2018,
      cars: [],
      resource: null
    };
  },
  methods: {
    createCar() {
      const car = {
        name: this.carName,
        yaer: this.carYer
      };
      // this.$http
      //   .post("http://10.211.55.11:3300/cars", car)
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(newCar => {
      //     console.log("wtf", newCar);
      //   });
      this.resource.save({}, car)
    },
    LoadCars() {
      // this.$http
      //   .get("http://10.211.55.11:3300/cars")
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(allCar => {
      //       console.log("wtf", allCar);
      //     this.cars = allCar
      //   });

      this.resource.get().then(reponse=>reponse.json())
      .then(cars => this.cars = cars)
    }
  },
  created(){
    // this.resource = this.$resource('http://10.211.55.11:3300/cars')
     this.resource = this.$resource('cars')
  }
};
</script>
<style>
</style>


//Возврат промис, обработка then
//http://localhost:3000/cars
            // this.$http.post(
            //     'http://10.211.55.11:3300/cars',
            //     car
            //     ).then(response=>{
            //         console.log('wtf', response)
            //     })