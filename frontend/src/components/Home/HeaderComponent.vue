<script setup>
import { RouterLink } from "vue-router";
import PanierComponent from "@/components/Home/PanierComponent.vue";
</script>

<template>
  <header>
    <RouterLink id="Logo" to="/"><h1>Sandwiches</h1></RouterLink>

    <nav>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/admin" v-if="user.admin">Dashboard</RouterLink>
      <RouterLink to="/orders" v-else>Orders</RouterLink>
      <RouterLink to="/shops" v-if="!user.admin">shops</RouterLink>

    </nav>
    <div class="UserNav">
      <RouterLink to="/login" v-if="!this.connected">Login</RouterLink>
      <RouterLink to="/register" v-if="!this.connected">Register</RouterLink>
      <RouterLink to="/profile" v-show="this.connected" id="profile" @mouseover="this.show=true">{{ this.user.name }}</RouterLink>
      <a href="#" v-if="this.connected" @click="$emit('logout')" >Logout</a>
    </div>
    <PanierComponent :panier="this.panier" :show="this.show" @mouseleave="this.show=false" @removeSandwich="$emit('removeSandwich',$event)"/>
  </header>
</template>
<script>

export default {
  name: 'HeaderComponent',
  props: {
    connected: Boolean,
    user: Object,
    panier: Object,
  },
  data() {
    return {
      show: false,
    };
  },
}
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


a {
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: 1.2em;
  text-decoration: red;
}

button {
  margin-left: 1em;
  border: none;
  background: red;
  padding: 15px 20px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
}

#profile {
  background-color: rgb(159, 246, 246);
  color: black;
}
@media screen and (max-width: 768px) {
  header {
    position: relative !important;
    flex-direction: column !important;
    text-align: center;
  }
  h1{
    width: 100%;
  }
  a{
    margin: 5px 0 !important;
  }
  nav {
    width:100%;
    display: flex;
    flex-direction: column;
  }
  .UserNav {
    width:100%;
    display: flex;
    flex-direction: column;
  }
}
</style>