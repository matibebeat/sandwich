<script>
export default {
  name: "AlertComponent",
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};

</script>

<template>
  <div class="alert"  :class="this.type">
    <img src="../../assets/sandwich.svg" alt="" style="width: 150px; height:150px;">
    <p>{{ this.message }}</p>
    <button @click="close"   v-if="this.type === 'error'">Close</button>
    <button @click="close" class="close"  v-if="this.type === 'update'">Close</button>
    <div v-if="this.type === 'Choice'">
      <button class="yes" @click="close(); $emit('delete')" >Yes</button>
      <button class="no" @click="close" >No</button>
    </div>
  </div>

</template>

<style scoped>
.alert {
  border-radius: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  padding: 1rem;
  background-color: lightpink;
  color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: slideDown 0.5s ease-in-out;
}

.alert p {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
}

.update{
  background-color: #4CAF50;
}
.error{
  background-color: #f44336;
}

button{
  margin: 20px;
  background:    #9ff6ff;
  border-radius: 11px;
  padding:       10px 25px;
  color:         #333;
  display:       inline-block;
  font:          normal bold 14px/1 "Open Sans", sans-serif;
  text-align:    center;
}
.yes{
  background-color: lightgreen;
}

.no{
  background-color: red;
}

</style>