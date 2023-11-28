<template>
  <div class="wrapper2item">
    <h3>{{ this.Titre }}</h3>
    <img src="../../assets/tomato.svg" alt="" v-if="this.url==='tomato'">
    <img src="../../assets/steak.svg" alt="" id="steak" v-if="this.url==='steak'">
    <img src="../../assets/salad.png" alt="" id="salad" v-if="this.url==='salad'">
    <p>
      {{ this.msg }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'HomeInformation',
  props: {
    msg: String,
    url: String,
    Titre: String,
  }
}
</script>
<style scoped>
img {
  position: absolute;
  right: 10%;
  width: 30%;
  float: right;
  transform: rotate(-15deg);
}

.wrapper2item {
  margin: 10px;
  padding: 0;
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

@media screen and (max-width: 768px) {
  .wrapper2item {
    width: 100%;
  }

}
</style>