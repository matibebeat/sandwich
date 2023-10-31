<template>
  <div class="product">
    <form action="">
      <select name="" id="">
        <option value="">Trier par</option>
        <option value="">Prix croissant</option>
        <option value="">Prix décroissant</option>
        <option value="">Nom croissant</option>
        <option value="">Nom décroissant</option>
      </select>
      <input
        type="checkbox"
        name="vegan"
        id=""
        v-model="vegan"
        @change="filter()"
      />
      <label for="vegan">Végétarien</label>
      <input
        type="checkbox"
        name="stock"
        id=""
        v-model="stock"
        @change="filter()"
      />
      <label for="stock">En stock</label>
      <input type="text" name="search" id="search" placeholder="Search" />
    </form>
    <div class="grid">
      <SandwichCard
        v-for="sand in sandwiches"
        :key="sand.id"
        :id="sand.id"
        :name="sand.name"
        :image="sand.image"
        :ingredients="sand.ingredients"
        :price="sand.price"
        :stock="sand.stock"
        :vegan="sand.vegan"
        :show="sand.show"
      />
    </div>
  </div>
</template>

<script>
import { vModelCheckbox } from "vue";
import SandwichCard from "../components/SandwichCard.vue";

export default {
  name: "ProductsView",
  components: { SandwichCard },
  data() {
    return {
      vegan: false,
      stock: false,
      sandwiches: [
        {
          id: 1,
          name: "Sandwich triangle",
          price: 5,
          ingredients: ["pain", "salade", "tomate"],
          image:
            "https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900",
          vegan: false,
          stock: true,
          show: true,
        },
        {
          id: 2,
          name: "Sandwich italien",
          price: 4.25,
          ingredients: ["pain", "salade", "tomate", "oignon", "steak"],
          image:
            "https://hips.hearstapps.com/hmg-prod/images/italian-sandwich-recipe-2-1674500643.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
          vegan: false,
          stock: true,
          show: true,
        },
        {
          id: 3,
          name: "Sandwich ",
          price: 1.5,
          ingredients: ["pain", "jambon"],
          image:
            "https://upload.wikimedia.org/wikipedia/commons/2/24/Bologna_sandwich.jpg",
          vegan: false,
          stock: false,
          show: true,
        },
        {
          id: 4,
          name: "Sandwich 4",
          price: 5,
          ingredients: ["pain", "salade", "tomate"],
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2cfu1kUkWTGxr-z2uyf9N3wmjRpjvaW6mzQRzaEnN6Q&s",
          vegan: true,
          stock: true,
          show: true,
        },
      ],
    };
  },
  mounted() {
    console.log("cc");
    console.log(this.sandwiches);
    /*fetch data from */
  },
  methods: {
    filter() {
      this.sandwiches.forEach((sandwich) => {
        if (this.vegan && !sandwich.vegan) {
          sandwich.show = false;
        } else if (this.stock && !sandwich.stock) {
          sandwich.show = false;
        } else {
          sandwich.show = true;
        }
      });
    },
  },
};
</script>

<style scoped>
.product {
  margin-top: 0px;
  width: 80%;
  padding: 10%;
}

form {
  background-color: white;
  padding: 2% 5%;
  border-radius: 20px;
}

form select {
  font-size: 1.2em;
  margin-right: 2%;
  padding: 1% 5% 1% 1%;
  border-radius: 10px;
  border: 1px solid #333;
}

form input {
  margin-right: 2%;
  padding: 1% 5% 1% 1%;
  border-radius: 10px;
  border: 1px solid #333;
}

form label {
  font-size: 1.2em;
  margin-right: 2%;
  padding: 1% 5% 1% 1%;
}

form input[type="text"] {
  font-size: 1.2em;
  width: 20%;
  float: right;
}

/*augmente la taille des cases à cocher*/
form input[type="checkbox"] {
  transform: scale(2);
  margin-right: 2%;
  padding: 1% 5% 1% 1%;
  border-radius: 10px;
  border: 1px solid #333;
}
/*



 Grid of products



*/

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  margin-top: 2em;
  margin-bottom: 0px;
  padding-bottom: 0px;
}
</style>