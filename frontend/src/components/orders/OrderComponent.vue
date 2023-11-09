<template>
  <li class="order" >
    <h2>{{ order.date }} <span class="size">{{order.Sandwichs.length}} sandwiches</span></h2>
    <ul>
      <li class="sandInfos" v-for="sandwich in order.Sandwichs" :key="sandwich.id">
        <p class="sandName">{{sandwich.name}}</p>
        <p class="sandPrice">{{sandwich.price}} €</p>
      </li>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'order-component',
  props: {
    order: {}
  }
}
</script>
<style scoped>
.order::marker {
  content: '🛒';
  font-size: 30px;
  padding-right: 10px;
}

h2 {
  font-size: 2em;
  font-weight: 800;
  color: #333;
  margin-bottom: 0px;
}

.sandName {
  font-size: 1.2em;
  font-weight: 400;
  color: #333;
}

.sandPrice {
  font-size: 1.2em;
  font-weight: 400;
  color: #333;
}

.size {
  font-size: 0.8em;
  font-weight: 400;
  color: #333;
}



</style>