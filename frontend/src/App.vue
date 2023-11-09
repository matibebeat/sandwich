<script setup>
import FooterComponent from "@/components/Home/FooterComponent.vue";
import HeaderComponent from "@/components/Home/HeaderComponent.vue";

</script>

<template>
  <HeaderComponent @logout="logout" :connected="this.connected" :user="this.user"/>

  <RouterView class="site" :User="this.user" @login="log()"/>
  <FooterComponent/>

</template>

<script>

export default {
  name: "App",
  components: {
    HeaderComponent,
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
        admin: true,
      }
    };
  },

  mounted() {
    try{
      this.user = JSON.parse(localStorage.getItem("user"));
      console.log(this.user);
      if(this.user==null){
        this.user = {
          name: "John Doe",
          email: "  ",
          password: "  ",
          role: "  ",
          id: 1,
          admin: false,
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
        admin: false,
      };
      this.connected = false;
    }
    console.log(this.connected);
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.connected = false;
      this.user = {
        name: "John Doe",
        email: "  ",
        password: "  ",
        role: "  ",
        id: 1,
        admin: false,
      };
    },
    log() {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.connected = true;
    },
  },
};


</script>



<style scoped>
header {
  backdrop-filter: blur(10px); /* Flou sur la barre fixe */
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
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
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
/*when a is hovered, it is underline progreeively by the left*/
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

</style>
