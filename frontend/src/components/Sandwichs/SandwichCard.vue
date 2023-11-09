<template>
  <router-link :to="'/products/'+this.id" class="sandwich" v-if="this.show" :alt="this.description">
    <div class="image">
      <img
          :src="this.image"
          alt=""
      />

      <p>
        {{ this.description }}
      </p>
      <router-link :to="'/modify/'+this.id">
        <img
            v-if="this.admin"
            src="../../assets/reglages.png"
            alt="reglages"
            class="reglages"

        />
      </router-link>
    </div>



    <div class="sandwichTitle">
      <h3>{{this.name}}</h3>
      <p class="prix">
        <strong>{{this.price}} € </strong>
      </p>
    </div>

    <p class="ingredients"><span v-for="ingredient in this.ingredients" :key="ingredient">{{ingredient}}, </span></p>
  </router-link>
</template>

<script>
export default {
    name: "SandwichCard",
    props: {
      admin: Boolean,
        id: Number,
        name: String,
        price: Number,
      description: String,
        ingredients: Array,
        image: String,
        vegan: Boolean,
        stock: Boolean,
        show: Boolean,
    },
    mounted() {
      let sandwiche = document.getElementsByClassName("sandwich")[0];
      if (this.stock == false) {
        sandwiche.classList.add("true");
      }
    },
};
</script>

<style scoped>
.sandwich {
    background-color: white;
    height: 350px;
    width: 100%;
    border-radius: 10px;
    color: black;
    text-decoration: none;
  }

.sandwich:hover {
    background-color: lightgray;
    transform: scale(1.05);
    transition: 0.3s;
  }

  .sandwich .image {
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
  }

  .sandwich .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
  }

  .sandwich .image .reglages {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 4px;
    right: 4px;
    margin: 0;
    padding: 0;
    display: none;
  }

  .sandwich .image .reglages:hover {
    transform: scale(1.2);
    transition: 0.3s;
  }

  .sandwich:hover .image .reglages {
    display: block;
  }

  .sandwich .image p {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
  }

  .sandwich:hover .image p{
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    width: 96%;
    height: 70%;
    margin-top: 0;
    border-radius: 10px 10px 0px 0px;
    /*pu 2% padding everywhere but on the bottom*/
    padding: 0% 2% 0 2%;
    color: white;
    font-size: 1.4em;

    word-wrap: break-word
  }
  
  .sandwichTitle {

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .sandwich h3 {
    font-size: 1.2em;
    padding: 1em;
    margin: 0;
    font-weight: 400;
    padding-bottom: 0;
  }
  
  .sandwich .ingredients {
    font-size: 0.8em;
    padding: 1em;
    padding-left: 1.6em;
    padding-top: 0.2em;
    margin: 0;
    font-weight: 400;
    color: grey;
  }
  
  .sandwich .prix {
    font-size: 1.2em;
    padding: 1em;
    margin: 0;
    font-weight: 400;
    float: right;
  }

.true{
  background-color: lightgray;
}

.true:hover{
  background-color: lightgray;
  transform: scale(0.99);
  transition: 0.3s;
  opacity: 0.5;
}

.true img{
  opacity: 0.5;
}

</style>