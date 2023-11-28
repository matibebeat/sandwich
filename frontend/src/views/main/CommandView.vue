<template>
  <div class="command">
    <div class="wrapper">
      <ul>
        <li v-for="item in panier" :key="item.id">
          <div>
            <span class="quantity"> {{ item.quantity }} x </span>
            <span> {{ item.name }}, </span>
            <span style="font-size: 12px"> {{ item.price }} €</span>
          </div>

          <span class="price"> {{ item.price * item.quantity }}€</span>

        </li>
      </ul>
      <form action="">
        <legend>Informations</legend>
        <input type="text" v-model="User.address" placeholder="Address" />
        <input type="text" v-model="User.name" placeholder="Name" />
        <input type="text" v-model="User.email" placeholder="Email" />
        <input type="text" v-model="User.phone" placeholder="Phone" />
        <primary-button @click="confirm">Confirm</primary-button>
      </form>

    </div>

  </div>
</template>

<script>
import primaryButton from "@/components/buttons/PrimaryButton.vue";
import PrimaryButton from "@/components/buttons/PrimaryButton.vue";
export default {
  name: "CommandView",
  components: {PrimaryButton},
  props: {
    User: Object,
    panier: Object,
  },
  data() {
    return {
    };
  },
  methods: {
    confirm() {
      this.$emit("confirmOrder");
      this.$router.push("/orders");
    },
  },
};
</script>

<style scoped>
.command{
  margin-top: 5%;
  width: 80%;
  padding: 10%;
}
h1{
  font-size: 3.5em;
  font-weight: 800;
  color: #333;
  margin-bottom: 0.25em;
}
ul{
  list-style: none;
  padding: 5%;
  width:50%;
  border-radius: 20px;
  background-color: lightpink;
  height: 100%;
}
li{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  font-size: 1.2em;
  font-weight: 500;
}
.price{
  font-weight: 800;
}
form{
width: 50%;
  background-color: white;
  padding: 5%;
  border-radius: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height:600px;
}

legend{
  font-size: 2em;
  font-weight: 800;
  color: #333;
  margin-bottom: 0.25em;
}
input{
  margin-bottom: 1em;
  padding: 1em;
  border-radius: 20px;
  border: 1px solid #333;
  font-size: 1.2em;
  font-weight: 500;
}
</style>