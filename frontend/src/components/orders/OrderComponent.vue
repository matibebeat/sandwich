<template>
  <li class="order" :class="order.status" @click="sent">
    <h2>{{ order.date }} <span class="size">{{order.Sandwichs.length}} sandwiches</span> <span class="status">{{ order.status }}</span></h2>
    <ul>
      <li class="sandInfos" v-for="sandwich in order.Sandwichs" :key="sandwich.id">
        <p class="sandName">{{sandwich.name}}</p>
        <p class="sandPrice">{{sandwich.price}} €</p>
      </li>
    </ul>
  </li>
</template>
<script>
import axios from "axios";
export default {
  name: 'order-component',
  props: {
    order: {}
  },
  methods: {
    sent(){
      axios.post("http://localhost:4000/api/order/send/"+this.order._id)
          .then(() => {
            alert("Order has been sent!");
          })
          .catch((error) => {
            console.error(error);
          });
    }
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
  margin-bottom: 0;
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

.status{
  font-size: 0.6em;
}

.order{
  padding: 2% 5%;

}
.order{
  border-radius: 20px;
}

.order:hover{
  background-color: lightgray;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.75);
}

.Sent{
  background-color: lightgreen;
}
.Waiting{
  background-color: lightblue;
}
</style>