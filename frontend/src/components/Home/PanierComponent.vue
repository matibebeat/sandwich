<script>
import axios from "axios";
import PrimaryButton from "@/components/buttons/PrimaryButton.vue";
export default{
  name: "PanierComponent",
  components: {PrimaryButton},
  props: {
    panier: Object,
    show: Boolean,
  },
  data() {
    return {
      sandwichs: [],
    };
  },
  methods: {
    removeSandwich(index) {
      this.$emit("removeSandwich", index);
    }
  },
  updated() {
    this.panier.forEach((sandwich) => {
      axios
        .get("http://localhost:4000/api/sandwich/" + sandwich.id)
        .then((response) => {
          sandwich.name = response.data.name;
          sandwich.price = response.data.price;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
}
</script>
<template>
  <div class="panier" v-if="show">
    <ul>
      <li v-for="(sandwich, index) in this.panier" :key="sandwich.id" class="sandwich-item">
        <p>{{sandwich.name}}</p>
        <p class="price">{{sandwich.quantity}}</p>
        <button class="remove-button" @click="removeSandwich(sandwich.id)">Remove</button>
      </li>
    </ul>
    <div class="total" v-if="this.panier.length>0">
      <p>Total</p>
      <p>{{this.panier.reduce((acc, sandwich) => acc + sandwich.price * sandwich.quantity, 0)}} €</p>
    </div>
    <p v-if="this.panier.length===0"> Empty Cart</p>
         <router-link to="/buy" v-if="this.panier.length>0"><PrimaryButton>Command</PrimaryButton></router-link>
  </div>
</template>
<style scoped>
  .panier{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 100%;
    right: 0;
    margin: 2%;
    padding: 3%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.75);
    font-size: 1.5em;
    border-radius: 20px;
    width:  25%;
  }

  .panier div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .total{
    border-top: 1px solid black;
    width: 100%;
    padding-top: 2%;
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  ul li{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .price{
    float: right;
    margin-left: 10px;
  }

  .remove-button {
    display: none;
  }

  .sandwich-item:hover .remove-button {
    display: block;
  }
</style>