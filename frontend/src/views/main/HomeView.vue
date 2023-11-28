<template>
  <div class="home">
    <h1>Home of the best sandwiches ever,</h1>
    <h1>Try it and you will love</h1>
    <img src="../../assets/sandwich.svg" alt="sandwich" />
    <div class="main">
    <p>
      Our sandwiches are made with the freshest ingredients and the most delicious recipes. We believe that a good sandwich can make your day better, and we strive to provide the best sandwiches ever. Whether you're a meat lover or a vegetarian, we have the perfect sandwich for you. Come and try our sandwiches, and we guarantee that you will love them!
    </p>


    </div>
    <div class="mainButtons">
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/shops">stores</RouterLink>
    </div>
    <div class="block2">
      <h2>Our lifestyle</h2>
      <div class="wrapper2">
        <HomeInformation msg="Our sandwiches are made with locally sourced, fresh ingredients that are not only delicious but also good for your health. We believe in providing the best quality ingredients to our customers, so you can enjoy your sandwich guilt-free. Try our Peaceful sandwich made with fresh tomatoes and other healthy ingredients today!" url="tomato" Titre="Ingredients" />

        <HomeInformation msg="We believe that treating our employees well is just as important as making delicious sandwiches. That's why we provide fair wages, benefits, and a positive work environment. Our employees are the backbone of our business, and we value their hard work and dedication. Come and support our mission of treating everyone with respect and kindness!" url="steak" Titre="Employee Treatment" />

        <HomeInformation msg="At our sandwich shop, we take pride in our unique and original sandwich recipes. Our sandwiches are not only delicious, but they are also creative and innovative. We believe that a sandwich can be more than just a simple meal, it can be an experience. " url="salad" Titre="Originality" />
      </div>
    </div>
    <div class="block3">
      <h2>Our reviews</h2>
      <div class="wrapper3">
        <AvisComponent v-for="review in reviews" :review="review" />

      </div>
        <RouterLink to="/reviews" class="button">Add your review</RouterLink>

    </div>
  </div>
</template>

<script>
import AvisComponent from "@/components/Home/AvisComponent.vue";
import axios from "axios";
import HomeInformation from "@/components/Home/HomeInformations.vue";

export default {
  name: "HomeView",
  components: { HomeInformation, AvisComponent },
  data: function () {
    return {
      reviews: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:4000/api/review")
      .then((response) => {
        this.reviews = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.home {
  padding: 10%;
  margin-top: 100px;
  width: 80%;
}
h1 {
  font-size: 3em;
  font-weight: 800;
  color: #333;

  margin-bottom: 0.25em;
}

img {
  position: absolute;
  right: 10%;
  width: 30%;
  float: right;
  transform: rotate(-15deg);
}

div.main {
  font-size: 1.2em;
  width: 50%;
  margin-top: 2em;

  line-height: 1.5em;
}

.mainButtons a {
  margin-left: 1em;
  border: none;
  background: red;
  padding: 20px 80px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
}
.mainButtons a:hover {
  background: lightpink;
}

.mainButtons {
  margin-top: 5em;
  padding-left: 2%;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.block2 {
  position: relative;
  margin-top: 20em;
  width: 100%;
  height: 100%;
}
h2 {
  font-size: 2.5em;
  font-weight: 800;
  color: #333;
  margin-bottom: 0.25em;
  margin-top: 2em;
}

.wrapper2 {
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 2em;
  justify-content: space-between;
}

.wrapper3 {
  padding: 2%;

  border-radius: 25px;
  width: 96%;
  display: flex;
  flex-direction: row;
  margin-top: 2em;
  justify-content: space-between;
  background-color: aliceblue;
}

.block3 {
  margin-top: 15em;
  width: 100%;
  height: 100%;
}
@media  screen and (max-width: 768px)  {
  h1{
    font-size: 2.5em;
    width: 100%;
    text-align: justify;
  }
  .home{
    width: 100%;
  }
  img{
    width: 100%;
    position: relative;
    right: 0;
    transform: rotate(20deg);
  }
  div.main{
    width: 100%;
    text-align: justify;
  }
  .mainButtons{
    width: 100%;
    padding-left: 0;
    margin-top: 2em;
    justify-content: space-around;
  }
  .mainButtons a{
    padding: 10px 40px;
  }
  .block2{
    margin-top: 5em;
  }
  .wrapper2{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .block3{
    margin-top: 5em;
  }
.wrapper3{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.button{
  margin-left: 1em;
  border: none;
  background: red;
  padding: 15px 20px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  position: relative;
  left:42%;
  transform: translateX(-50%);
}
</style>