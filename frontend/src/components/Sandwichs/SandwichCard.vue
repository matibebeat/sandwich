<template>
  <div class="sandwich">
    <router-link
      :to="'/products/' + this.id"
     
      v-if="this.show"
      :alt="this.description"
    >
      <div class="image">
        <img :src="this.image" alt="" />

        <p>
          {{ this.description }}
        </p>
        <router-link :to="'/modify/' + this.id">
          <img
            v-if="this.admin"
            src="../../assets/Settings.png"
            alt="Settings"
            class="settings"
          />
        </router-link>
      </div>

      <div class="sandwichTitle">
        <h3>{{ this.name }}</h3>
        <p class="price">
          <strong>{{ this.price }} € </strong>
        </p>
      </div>
      <div class="bottom">
        <p class="ingredients">
          <span v-for="ingredient in this.ingredients" :key="ingredient"
            >{{ ingredient }},
          </span>
        </p>
      </div>
    </router-link>
    <div class="cart">
      <button class="moins" @click="moins">-</button>
      <input type="number" v-model="this.quantity" min="1" max="10" />
      <button class="plus" @click="plus">+</button>
      <button class="add" @click="$emit('buy',{quantity: this.quantity,id: this.id })">add to cart</button>
     </div>
  </div>
</template>

<script>
export default {
  name: "SandwichCard",
  props: {
    admin: Boolean,
    id: String,
    name: String,
    price: Number,
    description: String,
    ingredients: Array,
    image: String,
    vegan: Boolean,
    stock: Boolean,
    show: Boolean,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    plus() {
      if (this.quantity < 9) {
        this.quantity++;
      }
    },
    moins() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
  mounted() {
    let sandwich = document.getElementsByClassName("sandwich")[0];
    if (this.stock === false) {
      sandwich.classList.add("true");
    }
  },
};
</script>

<style scoped>
.sandwich {
  background-color: white;
  height: 350px;
  width: 100%;
  border-radius: 10px;
  color: black;
  text-decoration: none;
}

.sandwich:hover {
  background-color: lightgray;
  transform: scale(1.05);
  transition: 0.3s;
}

.sandwich .image {
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.sandwich .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.sandwich .image .settings {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 4px;
  right: 4px;
  margin: 0;
  padding: 0;
  display: none;
}

.sandwich .image .settings:hover {
  transform: scale(1.2);
  transition: 0.3s;
}

.sandwich:hover .image .settings {
  display: block;
}

.sandwich .image p {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
}

.sandwich:hover .image p {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  width: 96%;
  height: 70%;
  margin-top: 0;
  border-radius: 10px 10px 0 0;
  /*pu 2% padding everywhere but on the bottom*/
  padding: 0 2% 0 2%;
  color: white;
  font-size: 1.4em;

  word-wrap: break-word;
}

.sandwich:hover input {
  display: inline-block;
}
.sandwich:hover button {
  display: inline-block;
}
.sandwichTitle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sandwich h3 {
  font-size: 1.2em;
  margin: 0;
  font-weight: 400;
  padding: 1em 1em 0;
}

.sandwich .ingredients {
  font-size: 0.8em;
  padding: 0.2em 1em 1em 1.6em;
  margin: 0;
  font-weight: 400;
  color: grey;
}

.sandwich .price {
  font-size: 1.2em;
  padding: 1em;
  margin: 0;
  font-weight: 400;
  float: right;
}

.true {
  background-color: lightgray;
}

.true:hover {
  background-color: lightgray;
  transform: scale(0.99);
  transition: 0.3s;
  opacity: 0.5;
}

.true img {
  opacity: 0.5;
}

.bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

input {
  border: 1px solid black;
  text-align: center;
  font-size: 1.3em;
  padding: 0.25em ;
  width: 1em;
  display: none;
}
.add{
  border-radius: 0 10px 10px 0; 
  border: 1px solid black;
  text-align: center;
  font-size: 1.3em;
  padding: 0.25em ;
  background-color: lightgray;
  margin: 0em 0.5em 0.3em 0;
  transition: 0.3s;
}

a{
  text-decoration: none;
  color: black;
}
.cart{
  position:absolute;
  bottom: 0;
  right: 0;
}
.plus{ 
  border: 1px solid black;
  text-align: center;
  font-size: 1.3em;
  padding: 0.25em ;
  background-color: lightgray;
  margin: 0em 0em 0.3 0;
  transition: 0.3s;

}
.moins{
  border: 1px solid black;
  text-align: center;
  font-size: 1.3em;
  padding: 0.25em ;
  background-color: lightgray;
  margin: 0em 0em 0.3 0;
  transition: 0.3s;
  border-radius: 10px 0 0 10px; 
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
input[type=number]:focus{
  outline: none;

}


/* Chrome */
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button { 
-webkit-appearance: none;
margin:0;
}

/* Opéra*/
input::-o-inner-spin-button,
input::-o-outer-spin-button { 
-o-appearance: none;
margin:0
}

button:hover{
  background-color: white;
  cursor: pointer;
}

button{
  display: none;
}
</style>