<template>
    <div>
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
    </div>
    <div class="card" style="width: 12rem;">
    <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card" style="width: 12rem;">
    <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card" style="width: 12rem;">
    <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card" style="width: 12rem;">
    <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Menu',
            message: 'Choose anything you would like'
        }
    }
};
</script>

<style>
.card{
    color:black;
    display: inline-block;
    margin-left:10px;

}
</style>