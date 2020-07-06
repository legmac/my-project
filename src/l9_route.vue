<template>
  <div class="container">
    <!-- start nav -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link tag="li" class="nav-link" exact to="/" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-link" to="/cars" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>

          <router-link tag="li" class="nav-link" to="/car/3" active-class="active">
            <a class="nav-link">Car 3</a>
          </router-link>
          <router-link tag="li" class="nav-link" to="/car/4" active-class="active">
            <a class="nav-link">Car 4</a>
          </router-link>
           <router-link tag="li" class="nav-link" to="/res" active-class="active">
            <a class="nav-link">Res</a>
          </router-link>
          <!-- 
             <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
            <li class="nav-item">
        <router-link class="nav-link" to="/cars">Cars</router-link> 
        <router-link class="nav-link" :to="'/cars'">Cars</router-link>
          </li>-->
        </ul>
      </div>
    </nav>
    <!-- stop nav  To kuda scladivati routi-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>




    // <!-- START NAVBAR -->
    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <div class="collapse navbar-collapse">
    //     <div class="navbar-nav">
    //       <a class="nav-item nav-link" href="#">Home</a>
    //       <a class="nav-item nav-link" href="#">Cars</a>
    //     </div>
    //   </div>
    // </nav>
    // <!-- STOP NAVBAR -->