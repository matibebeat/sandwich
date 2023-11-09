<template>
  <div class="home">
    <h1>Home of the best sandwiches ever,</h1>
    <h1>Try it and you will love</h1>
    <img src="../../assets/sandwich.svg" alt="sandwich" />
    <p class="main">
      Lorem ipsum dolor sit a met, consectetur adipiscing elit. Nullam auctor,
      nisl eget ultrum dolor sit a met, consectetur adipiscing elit. Nullicies
      aliquam, nunc sapien aliquet nunc, eget luctus nisl nunc eum dolor sit a
      met, consectetur adipiscing elit. Nullget nisl.
    </p>
    <div class="mainButtons">
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/shops">stores</RouterLink>
    </div>
    <div class="block2">
      <h2>Our lifestyle</h2>
      <div class="wrapper2">
        <HomeInformations msg="lorem ipsum dolor sit a met, consectetur adipiscing elit. Nulla auctor, nisl eget ultrum dolor sit a met, consectetur  elit. Nullicies aliquam, nunc sapien aliquet nunc, eget luctus nislnunc eum dolor sit a met, consectetur adipiscing elit. Nullget nisl." url="tomato" Titre="Peacefull" />

        <HomeInformations msg="lorem ipsum dolor sit a met, consectetur adipiscing elit. Nulla auctor, nisl eget ultrum dolor sit a met, consectetur  elit. Nullicies aliquam, nunc sapien aliquet nunc, eget luctus nislnunc eum dolor sit a met, consectetur adipiscing elit. Nullget nisl." url="steack" Titre="steak" />

        <HomeInformations msg="lorem ipsum dolor sit a met, consectetur adipiscing elit. Nulla auctor, nisl eget ultrum dolor sit a met, consectetur  elit. Nullicies aliquam, nunc sapien aliquet nunc, eget luctus nislnunc eum dolor sit a met, consectetur adipiscing elit. Nullget nisl." url="salad" Titre="salad" />
      </div>
    </div>
    <div class="block3">
      <h2>Our reviews</h2>
      <div class="wrapper3">
        <AvisComponent v-for="review in reviews" :review="review" />

      </div>
    </div>
  </div>
</template>

<script>
import AvisComponent from "@/components/Home/AvisComponent.vue";
import axios from "axios";
import HomeInformations from "@/components/Home/HomeInformations.vue";

export default {
  name: "HomeView",
  components: {HomeInformations, AvisComponent },
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
        console.log(this.reviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }
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

p.main {
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

.wrapper2item {
  margin: 10px;
  padding: 0px;
  background-color: white;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
  border-radius: 25px;
}

.wrapper2item img {
  position: inherit;
  width: 50%;
}
.wrapper2item p {
  padding: 10px 20px;
  font-size: 0.9em;
  line-height: 1.5em;
  font-weight: 500;
}
#steak {
  transform: rotate(120deg);
}
#salad {
  transform: rotate(0deg);
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
.wrapper3item {
  margin: 10px;
  padding: 10px;
  background-color: pink;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
  border-radius: 25px;
  height: auto;
}

.wrapper3item div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  float: top;
}
.wrapper3item .starRate {
  width: 60%;
}
.wrapper3item h4 {
  font-size: 1.2em;
  font-weight: 800;
  color: #333;
}
.wrapper3item p {
  font-size: 1em;
  line-height: 1.5em;
  font-weight: 500;
  text-align: justify;
}
.block3 {
  margin-top: 15em;
  width: 100%;
  height: 100%;
}
</style>