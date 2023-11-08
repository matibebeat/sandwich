<template>
<div class="grid">
  <div class="case" id="balanceCase">
    <h2>Balance amount</h2>
    <div class="wrapper">
      <div>
        <h3>Last month </h3>
        <p><span class="price">{{ this.MonthAmount}}</span>$</p>
      </div>
      <div>
        <h3>Current month </h3>
        <p><span class="price">{{ this.LastMonthAmount }}</span>$</p>
      </div>
    </div>
  </div>
  <div class="case" id="orderNumCase">
    <h2>Number of orders</h2>
    <h3>In row:</h3>
    <p><span class="price">{{ this.orders.length }}</span></p>
  </div>
  <div class="case" id="infoCase">
    <h2>Welcome Mathis</h2>
    <h3>professional case</h3>

  </div>
  <div class="case" id="createForm">
    <h2>Create a product</h2>
    <form action="#">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" v-model="proto.name">
      <label for="image">Image:</label>
      <input type="text" id="image" name="image" v-model="proto.image">
      <label for="ingredients">Ingredients:</label>
      <div class="wrapper2">
        <div class="ingredients">
          <input type="checkbox" id="ingredient1" name="ingredient1" value="ingredient1">
          <label for="ingredient1">ingredient1</label>
        </div>
        <div class="ingredients">
          <input type="checkbox" id="ingredient2" name="ingredient2" value="ingredient2">
          <label for="ingredient2">ingredient2</label>
        </div>
        <div class="ingredients">
          <input type="checkbox" id="ingredient3" name="ingredient3" value="ingredient3">
          <label for="ingredient3">ingredient3</label>
          </div>
        <div class="ingredients">
          <input type="checkbox" id="ingredient2" name="ingredient2" value="ingredient2">
          <label for="ingredient2">ingredient2</label>
        </div>
        <div class="ingredients">
          <input type="checkbox" id="ingredient3" name="ingredient3" value="ingredient3">
          <label for="ingredient3">ingredient3</label>
        </div>
        <div class="ingredients">
          <input type="checkbox" id="ingredient2" name="ingredient2" value="ingredient2">
          <label for="ingredient2">ingredient2</label>
        </div>
        <div class="ingredients">
          <input type="checkbox" id="ingredient3" name="ingredient3" value="ingredient3">
          <label for="ingredient3">ingredient3</label>
        </div>



      </div>
      <label for="Description">Description:</label>
      <textarea name="Description" id="Description" cols="30" rows="10" v-model="proto.description"></textarea>
      <label for="vegan">Vegan:</label>
      <input type="checkbox" id="vegan" name="vegan" v-model="proto.vegan">
      <label for="price">Price:</label>
      <input type="number" min="0.00" max="10000.00" step="0.01" v-model="this.proto.price"/>
      <input type="submit" @click="this.CreateProduct" value="Submit">
    </form>

  </div>
  <div class="case" id="orderList">
    <h2>Orders</h2>
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
  </div>

  <div class="case" id="productCar">
    <div class="wrapper2">
      <div class="sandwiche" v-for="sandwich in products" :key="sandwich.id">
        <h2 class="name">{{sandwich.name}}</h2>
        <h3 class="">{{sandwich.price}}€</h3>
        <img :src="sandwich.image" alt="sandwiche">
      </div>


    </div>

  </div>



</div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminView",
  props: {
    User: Object,
  },
  data() {
    return {
      orders: [],
      MonthAmount: 0,
      LastMonthAmount: 0,
      ordersInRow: [],
      products: [],
      proto:{
        name:"",
        image:"",
        ingredients:[],
        description:"",
        price:0,
        vegan:false,
        stock:false,
      }
    };
  },
  methods: {
    CreateProduct() {
      axios.post("http://localhost:4000/api/sandwich/", {
        name: this.proto.name,
        image: this.proto.image,
        description: this.proto.description,
        ingredients: ["test"],
        price: this.proto.price,
        vegan: this.proto.vegan,
        stock: true,
      });
    },
  },
  mounted() {
    axios
      .get("http://localhost:4000/api/order/")
      .then((response) => {
        this.orders = response.data;
        console.log(this.orders);
        for (let i = 0; i < this.orders.length; i++) {
          this.orders[i].date = this.orders[i].date.slice(0, 10);
          this.orders[i].price = this.orders[i].price + "€";
          for (let j = 0; j < this.orders[i].Sandwichs.length; j++) {
            axios
              .get(
                "http://localhost:4000/api/sandwich/" +
                  this.orders[i].Sandwichs[j]
              )
              .then((response2) => {
                /*ajoute le sandwich au tableau de sandwichs*/
                this.orders[i].Sandwichs[j] = response2.data;
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:4000/api/sandwich/")
      .then((response) => {
        this.products = response.data;
        console.log(this.products);
      })
      .catch((error) => {
        console.log(error);
      });
    /*loop over the order array, if it's the current month, add the income*/
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].date.slice(5, 7) == new Date().getMonth() + 1) {
        this.MonthAmount += this.orders[i].price;
      } else if (
        this.orders[i].date.slice(5, 7) == new Date().getMonth() &&
        this.orders[i].date.slice(8, 10) > new Date().getDate()
      ) {
        this.MonthAmount += this.orders[i].price;
      }
    }
  },
};
</script>

<style scoped>
.grid {

  margin-top: 0px;
  width: 80%;
  height: 100%;
  padding: 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 0.5fr repeat(4, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
}

.case{
  background-color: white;
  border-radius: 20px;
  padding: 2% 5%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}
h2 {
  font-size: 2em;
  font-weight: 800;
  color: #333;
  margin-bottom: 0px;
}
h3 {
  margin-top: 10px;
  font-size: 1em;
  font-weight: 400;
  color: #333;
}

#balanceCase { grid-area: 1 / 1 / 2 / 2; }
#orderNumCase{ grid-area: 1 / 2 / 2 / 3; }
#infoCase { grid-area: 1 / 3 / 2 / 4; }
#createForm { grid-area: 2 / 1 / 5 / 3; }
#orderList { grid-area: 2 / 3 / 6 / 4; }
#productCar { grid-area: 5 / 1 / 6 / 3; }
.price{
  font-size: 2em;
  font-weight: 800;
  color: #333;
}
.wrapper2{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: scroll;
}
.wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
form{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
label{
  font-size: 1.2em;
  margin-top: 15px;
  font-weight: 400;
  color: #333;
}
input{

  border: 1px solid #333;
  padding: 15px;
  margin-top: 5px;
  font-size: 24px;
}
.ingredients{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  box-shadow: #333333;

}
img{
  width: 50px;
  height: auto;
  border-radius: 20px;
}
.sandwiche{
  padding:5% 5%;
}
.name{
  font-size: 1.2em;
  font-weight: 400;
  color: #333;
}
.sandName{
  font-size: 1.2em;
  font-weight: 400;
  color: #333;
}
.sandPrice{
  font-size: 1.2em;
  font-weight: 400;
  color: #333;
}
.size{
  font-size: 0.8em;
  font-weight: 400;
  color: #333;
}
textarea{
  border: 1px solid #333;
  padding: 15px;
  margin-top: 5px;
  font-size: 24px;
}


</style>