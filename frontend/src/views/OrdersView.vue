<template>
  <div class="orders">
    <div class="titre">
      <h1>Past orders</h1>
      <p>orders of Mathis</p>
    </div>
    <ul>
      <li class="order">
        <h2>11/08/2022 <span class="size">3 sandwiches</span></h2>
        <ul>
            <li class="sandInfos">
                <p class="sandName">Sandwiche Triangle</p>
                <p class="sandPrice">3,50€</p>
            </li>
            <li class="sandInfos">
                <p class="sandName">Sandwiche Italien</p>
                <p class="sandPrice">4,50€</p>
            </li>
            <li class="sandInfos">
                <p class="sandName">Sandwiche Italien</p>
                <p class="sandPrice">4,50€</p>
            </li>
        </ul>
      </li>
      <li class="order">
        <h2>09/08/2022 <span class="size">2 sandwiches</span></h2>
        <ul>
            <li class="sandInfos">
                <p class="sandName">Sandwiche Triangle</p>
                <p class="sandPrice">3,50€</p>
            </li>
            <li class="sandInfos">
                <p class="sandName">Sandwiche Italien</p>
                <p class="sandPrice">4,50€</p>
            </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.orders {
  margin-top: 0px;
  width: 80%;
  padding: 10%;
}
h1 {
  font-size: 3em;
  font-weight: 800;
  color: #333;
}
.titre {
  background-color: white;
  border-radius: 20px;
  padding: 2% 5%;
}
ul {
  background-color: #f3f3f3;
  margin-top: 0;
  width: 90%;
  margin-left: 5%;
}
li{
    list-style: none;
}
h2{
    font-size: 1.4em;
    padding: 1em;
    margin: 0;
    width:92%;
    font-weight: 6 00;
    padding-bottom: 0;
    border-bottom: #333 solid 1px;
}
.size{
    font-size: 0.8em;
    padding: 1em;
    margin: 0;
    font-weight: 400;
    padding-bottom: 0;
}
.sandInfos{
    width:80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.order{
    margin-bottom: 2%;
}
</style>