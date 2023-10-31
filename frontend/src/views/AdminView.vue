<template>
<div class="grid">
  <div class="case" id="balanceCase">
    <h2>Balance amount</h2>
    <div class="wrapper">
      <div>
        <h3>Last month </h3>
        <p><span class="price">125</span>$</p>
      </div>
      <div>
        <h3>Current month </h3>
        <p><span class="price">125</span>$</p>
      </div>
    </div>
  </div>
  <div class="case" id="orderNumCase">
    <h2>Number of orders</h2>
    <h3>In row:</h3>
    <p><span class="price">24</span></p>
  </div>
  <div class="case" id="infoCase">
    <h2>Welcome Mathis</h2>
    <h3>professional case</h3>

  </div>
  <div class="case" id="createForm">
    <h2>Create a product</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <label for="image">Image:</label>
      <input type="file" id="image" multiple="multiple" name="image">
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
      <label for="price">Price:</label>
      <input type="number" min="0.00" max="10000.00" step="0.01" />
      <input type="submit" value="Submit">
    </form>

  </div>
  <div class="case" id="orderList"></div>

  <div class="case" id="productCar">
    <div class="wrapper2">
      <div class="sandwiche">
        <h2 class="name">italien</h2>
        <h3 class="">4,50€</h3>
        <img src="https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900" alt="sandwiche">

      </div>
      <div class="sandwiche">
        <h2 class="name">italien</h2>
        <h3 class="">4,50€</h3>
        <img src="https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900" alt="sandwiche">
      </div>
      <div class="sandwiche">
        <h2 class="name">italien</h2>
        <h3 class="">4,50€</h3>
        <img src="https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900" alt="sandwiche">
      </div>
      <div class="sandwiche">
        <h2 class="name">italien</h2>
        <h3 class="">4,50€</h3>
        <img src="https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900" alt="sandwiche">
      </div>
      <div class="sandwiche">
        <h2 class="name">italien</h2>
        <h3 class="">4,50€</h3>
        <img src="https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900" alt="sandwiche">
      </div>
    </div>

  </div>



</div>
</template>

<script>
export default {
  name: "AdminView"
}
</script>

<style scoped>
.grid {

  margin-top: 0px;
  width: 80%;
  height: 100%;
  padding: 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
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
#createForm { grid-area: 2 / 1 / 4 / 3; }
#orderList { grid-area: 2 / 3 / 5 / 4; }
#productCar { grid-area: 4 / 1 / 5 / 3; }
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
</style>