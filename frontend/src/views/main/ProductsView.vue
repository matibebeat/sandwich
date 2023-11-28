<template>
  <div class="product">
    <form action="" v-show="false">
      <select name="" id="">
        <option value="">Order by</option>
        <option value="">increasing price</option>
        <option value="">Decreasing price</option>
        <option value="">increasing name</option>
        <option value="">decreasing name</option>
      </select>
      <input
        type="checkbox"
        name="vegan"
        id=""
        v-model="vegan"
        @change="filter()"
      />
      <label for="vegan">vegan</label>
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

          :admin="this.User.admin"
        v-for="sand in sandwiches"

        :key="sand._id"
        :id="sand._id"
        :name="sand.name"
        :image="sand.image"
        :description="sand.description"
        :ingredients="sand.ingredients"
        :price="sand.price"
        :stock="sand.stock"
        :vegan="sand.vegan"
        :show="sand.show"
          @buy="$emit('buy', $event)"
      />
    </div>
  </div>
</template>

<script>
import SandwichCard from "../../components/Sandwichs/SandwichCard.vue";
import axios from "axios";

export default {
  name: "ProductsView",
  components: { SandwichCard },
  props: {
    User: Object,
  },
  data() {
    return {
      vegan: false,
      stock: false,
      sandwiches: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:4000/api/sandwich")
      .then((response) => {
        this.sandwiches = response.data;
        for (let i = 0; i < this.sandwiches.length; i++) {
          this.sandwiches[i].show = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    filter() {
      this.sandwiches.forEach((sandwich) => {
        if((this.vegan && !sandwich.vegan) || (this.stock && !sandwich.stock))
        {
          sandwich.show = false;
        }else {
          sandwich.show = true;
        }
      });
    },
  },
};
</script>

<style scoped>
.product {
  margin-top: 0;
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


form input[type="checkbox"] {
  transform: scale(2);
  margin-right: 2%;
  padding: 1% 5% 1% 1%;
  border-radius: 10px;
  border: 1px solid #333;
}


.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  margin-top: 2em;
  margin-bottom: 0;
  padding-bottom: 0;
}
@media  screen and (max-width: 768px)  {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
  form{
    display: flex;
    flex-direction: column;
    width: 80%;
  }

}
</style>