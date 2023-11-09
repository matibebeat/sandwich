<template>
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
<script>
export default {
  name: 'FooterComponent'
}
</script>
<style scoped>




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
  margin-bottom: 0;
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



</style>