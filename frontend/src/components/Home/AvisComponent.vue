<template>
  <div class="wrapper3item">
    <div>
      <h4>{{ review.name}}</h4>
    </div>
    <star-rate class="starRate" :rate="review.grade"></star-rate>
    <p>
      {{ review.content }}
    </p>
  </div>
</template>
<script>
import StarRate from "@/components/utils/StarRate.vue";

export default {
  name: 'AvisComponent',
  components: {StarRate},
  props: {
    review: {
      name: String,
      grade: Number,
      content: String,
    },
  },
}
</script>
<style scoped>
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
@media screen and (max-width: 768px) {
  .wrapper3item {
    width: 80%;
  }
}
</style>