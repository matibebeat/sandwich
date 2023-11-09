<template>
  <div class="sandwich" >
    <h2 class="name">{{sandwich.name}}</h2>
    <h3 class="">{{sandwich.price}}€</h3>
    <img :src="sandwich.image" alt="sandwich">
  </div>
</template>
<script>
export default {
  name: 'LittleSandwich',
  props: {
    sandwich: {}
  }
}
</script>
<style scoped>

h2 {
  font-size: 2em;
  font-weight: 800;
  color: #333;
  margin-bottom: 0;
}

h3 {
  margin-top: 10px;
  font-size: 1em;
  font-weight: 400;
  color: #333;
}

img {
  width: 50px;
  height: auto;
  border-radius: 20px;
}

.sandwich {
  padding: 5% 5%;
}




</style>