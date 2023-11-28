<template>
  <div class="modify">
    <h1>Modify sandwich</h1>
    <form action="#">
      <div>
        <label for="name">Name:</label>
        <input type="text" @click="updateSandwich" name="name" id="name" placeholder="Name" v-model="sandwich.name">
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" @click="updateSandwich" name="price" id="price" placeholder="Price" v-model="sandwich.price">
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea @click="updateSandwich" name="description" id="description" placeholder="Description" v-model="sandwich.description"></textarea>
      </div>
      <div>
        <label for="image">Image:</label>
        <input type="text" @click="updateSandwich" name="image" id="image" placeholder="Image" v-model="sandwich.image">
      </div>
      <div>
        <label for="ingredients">Ingredients:</label>
        <input type="text" @click="updateSandwich" name="ingredients" id="ingredients" placeholder="Ingredients" v-model="sandwich.ingredients">
      </div>
      <button type="submit" @click="updateSandwich">Update</button>
      <button @click="sup">Delete</button>
    </form>
  </div>


  <loader-anim class="loader" v-if="this.loading"/>

</template>

<script>
import axios from "axios";
import LoaderAnim from "@/components/utils/LoaderAnim.vue";
export default {
  name: "ModifySandwichView",
  components: { LoaderAnim },
  data() {
    return {
      sandwich: {},
      loading: true,
    };
  },
  mounted() {
    /*get the id in the url and fetch the sandwich corresponding*/
    let id = this.$route.params.id;
    axios
        .get("http://localhost:4000/api/sandwich/"+id)
        .then((response) => {
          this.sandwich = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
  },
  methods: {
    updateSandwich() {
      /*show the loader*/
      this.loading = true;
      /*transform ingredients in an array*/
      /*update the sandwich in the database*/
      axios
        .put("http://localhost:4000/api/sandwich/"+this.sandwich._id, this.sandwich)
        .then((response) => {
          /*hide the loader*/
          this.loading = false;
          alert("Sandwich updated");
          /*return to product page*/
          this.$router.push("/products");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sup() {
      /*show the loader*/
      this.loading = true;
      /*delete the sandwich in the database*/
      axios
        .delete("http://localhost:4000/api/sandwich/"+this.sandwich._id)
        .then((response) => {
          /*hide the loader*/
          this.loading = false;
          alert("Sandwich deleted");
          /*return to product page*/
          this.$router.push("/products");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
};


</script>

<style scoped>
.modify {
  margin-top: 0;
  width: 80%;
  padding: 10%;
  display: flex;
  flex-direction: column;
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

form input, form textarea {
  margin-right: 2%;
  padding: 1% 5% 1% 1%;
  border-radius: 10px;
  border: 1px solid #333;
  width: 60%;
}

form label {
  font-size: 1.2em;
  margin-right: 2%;
  padding: 1% 5% 1% 1%;
  display: block;
}
.loader{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;

}

</style>