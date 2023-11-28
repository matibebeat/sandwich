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
      <input type="file" id="image" name="image" @change="handleFileUpload">
      <label for="ingredients">Ingredients:</label>
      <textarea name="ingredients" id="ingredients" cols="30" rows="10" v-model="proto.ingredients"></textarea>
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
      <order-component v-for="order in orders" :key="order.id" :order="order"/>
    </ul>
  </div>

  <div class="case" id="productCar">
    <div class="wrapper2">
      <LittleSandwich v-for="sandwich in products" :key="sandwich.id" :sandwich="sandwich"/>
    </div>
  </div>



</div>
</template>

<script>
import axios from "axios";
import OrderComponent from "@/components/orders/OrderComponent.vue";
import LittleSandwich from "@/components/Sandwichs/LittleSandwich.vue";

export default {
  name: "AdminView",
  components: {LittleSandwich, OrderComponent},
  props: {
    User: Object,
  },
  data() {
    return {
      selectedFile: null,
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
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    CreateProduct() {
      event.preventDefault();
      const formData = new FormData();
      formData.append('name',this.proto.name)
      formData.append('description',this.proto.description)
      formData.append('price',this.proto.price)
      formData.append('vegan', this.proto.vegan)
      formData.append('ingredients',['test'])
      formData.append('stock',true)
      formData.append('image', this.selectedFile)
      fetch("http://localhost:4000/api/sandwich/upload", {
        method: "POST",
        body: formData
      });

    },
  },
  mounted() {
    axios
      .get("http://localhost:4000/api/order/")
      .then((response) => {
        this.orders = response.data;
        for (let i = 0; i < this.orders.length; i++) {
          this.orders[i].date = this.orders[i].date.slice(0, 10);
          this.orders[i].price = this.orders[i].price + "€";
          console.log(this.orders[i].status);
          for (let j = 0; j < this.orders[i].Sandwichs.length; j++) {
            axios
              .get(
                "http://localhost:4000/api/sandwich/" +
                  this.orders[i].Sandwichs[j]
              )
              .then((response2) => {

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
      })
      .catch((error) => {
        console.log(error);
      });
    /*loop over the order array, if it's the current month, add the income*/
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].date.slice(5, 7) === `${new Date().getMonth() + 1}`) {

        this.MonthAmount += this.orders[i].price;
      } else if (
        this.orders[i].date.slice(5, 7) === `${new Date().getMonth() + 1}` &&
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

  margin-top: 0;
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
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.75);
}
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

img{
  width: 50px;
  height: auto;
  border-radius: 20px;
}

textarea{
  border: 1px solid #333;
  padding: 15px;
  margin-top: 5px;
  font-size: 24px;
}


</style>