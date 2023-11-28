<script>
import axios from "axios";

export default {
  name: "ProfileView",
  data: function () {
    return {
      user: {},
      orders: [],
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    axios.get("http://localhost:4000/api/order/"+this.user.id)
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

<template>
  <div class="profile">
    <h1>Profile</h1>
    <div class="profileInfos">
      <div class="profileInfosLeft">
        <h2>Informations</h2>
        <p>Name: {{user.name}}</p>
        <p>Email: {{user.email}}</p>
        <p>Address: {{user.address}}</p>
        <p>Phone: {{user.phone}}</p>
        
        <p>Role: {{user.admin ? 'admin' : 'buyer'}}</p>
        <router-link to="/update" class="button">Update</router-link>
      </div>
      <div class="profileInfosRight">
        <h2>Orders</h2>
        <ul>
          <li class="order" v-for="order in orders" :key="order.id">
            <h2>{{ order.date }} <span class="size"><br/>{{order.Sandwichs.length}} sandwiches</span></h2>
            <ul>
              <li class="sandInfos" v-for="sandwich in order.Sandwichs" :key="sandwich.id">
                <p class="sandName">{{sandwich.name}}</p>
                <p class="sandPrice">{{sandwich.price}} €</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  margin: 10%;
  width: 80%;
  padding: 5% 0;
  border-radius: 20px;

}

.profileInfos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
}

.profileInfosLeft {
  width: 40%;
}

.profileInfosRight {
  width: 40%;
  background-color: grey;
  padding: 2%;
  border-radius: 20px;
  height: 600px;
  overflow-y: scroll;
}

.profileInfos h2 {
  font-size: 1.5em;
  font-weight: 800;
  color: #333;
  margin-bottom: 0;
}

.profileInfos p {
  font-size: 1.2em;
  font-weight: 400;
  color: #333;
}

.order {
  list-style-type: none;
  margin-bottom: 2em;
}

.order::marker {
  content: '🛒';
  font-size: 30px;
  padding-right: 10px;
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


h1{
  font-size: 3em;
  font-weight: 800;
  color: #333;
  padding-bottom: 0.5em;
}

h2{
  font-size: 1.5em;
  font-weight: 800;
  color: #333;
  padding-bottom: 0.5em;
}

.button {
  margin-left: 1em;
  border: none;
  background: red;
  padding: 15px 50px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-size: 1.8em;
}

.button:hover {
  background: lightpink;
  cursor: pointer;
}

</style>