<template>
  <div>
    <img src="../../assets/star.png" v-for="index in rate" :key="index" alt="" />
    <img src="../../assets/star.png" v-for="index in 5-rate" :key="index" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    rate: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
div img {
  width: 12%;
}
</style>