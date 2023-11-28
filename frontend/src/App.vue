<template>
  <HeaderComponent @logout="logout" :connected="this.connected" :user="this.user" :panier="this.panier" @removeSandwich="suprPanier($event)"/>

  <RouterView class="site" :User="this.user" @login="log()" @buy="buy($event)" :panier="this.panier" @confirmOrder="order"/>
  <FooterComponent/>

</template>

<script>
import FooterComponent from "@/components/Home/FooterComponent.vue";
import HeaderComponent from "@/components/Home/HeaderComponent.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      connected: false,
      user:{
        name: "John Doe",
        email: "  ",
        password: "  ",
        role: "  ",
        id: 1,
        isAdmin: false,
      },
      panier: [],
    };
  },
  beforeUnmount() {
    this.setPanier();
  },

  mounted() {
    try{
      this.user = JSON.parse(localStorage.getItem("user"));
      if(this.user==null){
        this.user = {
          name: "John Doe",
          email: "  ",
          password: "  ",
          role: "  ",
          id: 1,
          isAdmin: false,
        };
        this.connected = false;
      }
      else{
        this.connected = true;
      }
    }
    catch (e) {
      this.user = {
        name: "John Doe",
        email: "  ",
        password: "  ",
        role: "  ",
        id: 1,
        isAdmin: false,
      };
      this.connected = false;
    }
    this.getPanier();
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("panier");
      this.panier = [];
      this.connected = false;
      this.user = {
        name: "John Doe",
        email: "  ",
        password: "  ",
        role: "  ",
        id: 1,
        isAdmin: false,
      };
    },
    log() {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.connected = true;
    },
    buy(obj) {
      /*check if the sandwich already in panier*/
      for (let i = 0; i < this.panier.length; i++) {
        if (this.panier[i].id === obj.id) {
          this.panier[i].quantity += obj.quantity;
          return;
        }
      }
      let sandwich = {
        id: obj.id,
        quantity: obj.quantity,
      };
      this.panier.push(sandwich);
    },
    getPanier() {
      try {
        this.panier = JSON.parse(localStorage.getItem("panier"));
        if (this.panier == null) {
          this.panier = [];
        }
      } catch (e) {
        this.panier = [];
      }
    },
    setPanier(){
        localStorage.setItem("panier", JSON.stringify(this.panier));
        console.log("update");
      },
    suprPanier(id) {
      console.log(id);
      for (let i = 0; i < this.panier.length; i++) {
        if (this.panier[i].id === id) {
          this.panier.splice(i, 1);
          this.setPanier();
          return;
        }
      }
    },
    order() {

      this.setPanier();
      var sandwichs= [];
      for (let i = 0; i < this.panier.length; i++) {
        for (let j = 0; j < this.panier[i].quantity; j++) {
          sandwichs.push(this.panier[i].id);
        }
      }
      console.log(sandwichs);
      axios.post("http://localhost:4000/api/order", {
        user: this.user.id,
        Sandwichs: sandwichs,
        price: 0,
        date: new Date(),
      })
          .then(() => {
            alert("Order has been posted!");
            this.panier = [];
            localStorage.removeItem("panier");
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },
};



</script>



<style scoped>
header {
  backdrop-filter: blur(10px);
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.863);
  width: 76%;
  margin: 0 auto;
  position: fixed;
  padding: 2%;
  top: 30px;
  left: 10%;
  border-radius: 20px 20px 20px 20px;
  border-bottom: 2px solid black;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.75);
}
.UserNav a {
  margin-left: 1em;
  border: none;
  background: red;
  padding: 15px 20px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
}
.UserNav a:hover {
  background: lightpink;
}

nav {
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
nav a {
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: 1.2em;
  text-decoration-color: red;
}
nav a:hover {
  text-decoration: underline;
  text-decoration-thickness: 0.2em;
  text-underline-offset: 0.2em;
  text-decoration-color: red;
  transition: 0.5s;
}
.site {
  position: relative;
  width: 100%;
}

footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 5%;
  width: 80%;
  padding-left: 5%;
  padding-right: 5%;
  background-color: lightpink;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
  margin-bottom:0;
}

footer .item h3 {
  font-size: 1.5em;
  font-weight: 800;
  margin-bottom: 1em;
}

footer .item a {
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: 1.2em;
  margin-bottom: 0.7em;
  text-decoration: red;
}

footer .item a:hover {
  text-decoration: underline;
  text-decoration-thickness: 0.2em;
  text-underline-offset: 0.2em;
  text-decoration-color: red;
  transition: 0.5s;
}
a{
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: 1.2em;
  text-decoration: red;
}
button{
  margin-left: 1em;
  border: none;
  background: red;
  padding: 15px 20px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
}
@media  screen and (max-width: 768px)  {
  footer{
    display: none;
  }
}
</style>
