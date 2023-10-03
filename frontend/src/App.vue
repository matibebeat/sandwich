<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink id="Logo" to="/"><h1>Sandwiches</h1></RouterLink>
    
    <nav>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/orders">Orders</RouterLink>
      <RouterLink to="/shops">shops</RouterLink>
    </nav>
    <div class="UserNav">
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
    </div>
  </header>

  <RouterView class="site" />
  <footer>
    <div class="item">
      <h3>Navigation</h3>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/shops">Shops</RouterLink>
    </div>
    <div class="item">
      <h3>Legal</h3>
        <RouterLink to="/terms">Terms</RouterLink>
        <RouterLink to="/privacy">Privacy</RouterLink>
    </div>
    <div class="item">
      <h3>Follow us</h3>
      <a href="https://www.facebook.com/">Facebook</a>
      <a href="https://www.instagram.com/">Instagram</a>
      <a href="https://twitter.com/">Twitter</a>
    </div>
  </footer>
</template>

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
footer .item {
  width: 30%;
  margin: 2%;
  text-align: center;
  display: flex;
  flex-direction: column;
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
</style>
