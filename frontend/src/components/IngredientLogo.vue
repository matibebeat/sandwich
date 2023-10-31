<template>
  <div>
    <img src="../assets/steackLogo.svg" alt="" srcset="" v-if="this.ingredient='steack'"/>
    <img src="../assets/saladeLogo.svg" alt="" srcset="" v-if="this.ingredient='salade'"/>
  </div>
</template>

<script>
export default {
  name: "IngredientLogo",
  props: {
    ingredient: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
img {
  width: 300px;
  height: 40px;
}
</style>