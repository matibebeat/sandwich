<template>
  <div class="orders">
    <div class="titre">
      <h1>Past orders</h1>
      <p>orders of {{this.User.name}}</p>
    </div>
    <ul>
      <li class="order" v-for="order in orders" :key="order.id">
        <h2>{{ order.date }} <span class="size">{{order.Sandwichs.length}} sandwiches</span> </h2>
        <ul>
            <li class="sandInfos" v-for="sandwich in order.Sandwichs" :key="sandwich.id">
                <p class="sandName">{{sandwich.name}}</p>
                <p class="sandPrice">{{sandwich.price}} €</p>
            </li>
        </ul>
      </li>
    </ul>
    <loader-anim class="loader" v-if="this.loading"/>
  </div>

</template>

<script>
import axios from "axios";
import LoaderAnim from "@/components/utils/LoaderAnim.vue";
export default {
  name: "OrdersView",
  components: {LoaderAnim},
  props: {
    User: {
      name: String,
    },
  },
  data: function () {
    return {
      orders: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("http://localhost:4000/api/order/"+this.User.id)
      .then((response) => {
        this.orders = response.data;
        for (let i = 0; i < this.orders.length; i++) {
          this.orders[i].date = this.orders[i].date.slice(0, 10);
          this.orders[i].price = this.orders[i].price + "€";
          for (let j = 0; j < this.orders[i].Sandwichs.length; j++) {
            axios.get("http://localhost:4000/api/sandwich/"+this.orders[i].Sandwichs[j])
            .then((response2) => {
                this.orders[i].Sandwichs[j] = response2.data;
                this.loading = false;
            })
            .catch((error) => {
                console.log(error);
            });
          }
        }
        if(this.orders.length === 0) {
          this.loading = false;
        }
      }

      )
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.orders {
  margin-top: 0;
  width: 80%;
  padding: 10%;
}
h1 {
  font-size: 3em;
  font-weight: 800;
  color: #333;
}
.titre {
  background-color: white;
  border-radius: 20px;
  padding: 2% 5%;
}
ul {
  background-color: #f3f3f3;
  margin-top: 0;
  width: 90%;
  margin-left: 5%;
}
li{
    list-style: none;
}
h2{
    font-size: 1.4em;
  margin: 0;
    width:92%;
    font-weight: 600;
  padding: 1em 1em 0;
  border-bottom: #333 solid 1px;
}
.size{
    font-size: 0.8em;
    padding: 1em 1em 0;
    margin: 0;
    font-weight: 400;
}
.sandInfos{
    width:80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.order{
    margin-bottom: 2%;
}
</style>