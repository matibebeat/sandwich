<template>
  <div class="page">
    <div class="title">
      <h1>{{this.sand.name}}</h1>
      <p class="prix">
        <strong>{{this.sand.price}} € </strong>
      </p>
    </div>
    <p class="ingredients"><span v-for="ingredient in this.sand.ingredients" :key="ingredient">{{ingredient}}, </span></p>
    <div class="wrapper">
      <img :src="this.sand.image" alt="" />
      <div class="infos">
      <IngredientLogo v-for="ingredient in this.sand.ingredients" :key="ingredient" :ingredient="ingredient" />
      </div>
      <div class="actions">
        <button>Ajouter au panier</button>
        <button>Commander</button>
      </div>
    </div>

  </div>
</template>

<script>
import IngredientLogo from '../components/IngredientLogo.vue' 

export default {
  name: "OneSandwicheView",
  components: { IngredientLogo },
  data(){
    return {
      sand: {

      }
    }
  },
  mounted() {
    this.sand =   {     id: 1,
        name: "Sandwich triangle",
        price: 5,
        ingredients: ["pain", "salade", "tomate",'steack'],
        image:
          "https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900",
        vegan: false,
        stock: true,
        show: true,}
  },
};
</script>

<style scoped>
.page {
  padding: 10%;
  margin-top: 50px;
  width: 80%;
}
h1 {
  font-size: 3em;
  font-weight: 800;
  color: #333;

}
.title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  vertical-align: center;
}
.prix{
  font-size: 5em;
  margin: 0;
  font-weight: 400;
  padding-bottom: 0;
  color: #333;
}
.ingredients{
  font-size: 1.4em;
  width: 50%;
  line-height: 1.5em;
}
.wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
img{
  width: 30%;
  height: 300px;
  object-fit: cover;
  /*center image*/
  object-position: center;
  border-radius: 20px;
}

.infos{
  background-color: white;
  width:30%;
  display: flex;  
  flex-direction: column;
  align-items: center;
  /*make the heigt, the same as the image*/
  height: 150px;
  padding-top:75px;
  padding-bottom: 75px;
  border-radius: 20px;
}



.actions{
  background-color: white;
  width:30%;
  display: flex;  
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /*make the heigt, the same as the image*/
  height: 150px;
  padding-top:75px;
  padding-bottom: 75px;
  border-radius: 20px;
}

button{
  width: 80%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #333;
  background-color: red;
  color: white;
  font-size: 1.2em;
  font-weight: 600;
}

</style>