<template>
  <div class="shop">
    <h1>Shops</h1>
    <div class="wrapper">
      <div class="liste">
        <ul>
          <li @click="this.loc = 'waterfront'">
            <h2>Waterfront</h2>
            <p>Address: 19 Dock Rd, V & A Waterfront, Cape Town, 8001</p>
            <h3>13:00 19:00</h3>
          </li>
          <li @click="this.loc = 'seapoint'">
            <h2>Seapoint</h2>
            <p>Address: 19 Dock Rd, V & A Waterfront, Cape Town, 8001</p>
            <h3>13:00 19:00</h3>
          </li>
          <li @click="this.loc = 'villejuif'">
            <h2>Efrei</h2>
            <p>Address: 32 avenue de la republique, villejuif 94800</p>
            <h3>08:00 21:00</h3>
          </li>
          <li @click="this.loc = 'paris'">
            <h2>Tour Eiffel</h2>
            <p>Address: 5 avenue Anatole France, Paris 75007</p>
            <h3>13:00 19:00</h3>
          </li>

        </ul>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23599.22496065261!2d18.431852416475063!3d-33.91142875575461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6750cf9544a5%3A0x1dc3860578bb4780!2sV%26A%20Waterfront!5e0!3m2!1sen!2sza!4v1695897191728!5m2!1sen!2sza"
        width="800"
        height="600"
        style="border: 0"
        allowfullscreen=""
        referrerpolicy="no-referrer-when-downgrade"
        v-if="this.loc === 'waterfront'"
      ></iframe>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8630.621007523727!2d18.37935032201203!3d-33.91932121614038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67222874b343%3A0x9e1c2a4f978fc4a3!2sMojo%20Hotel!5e1!3m2!1sen!2sza!4v1695898311391!5m2!1sen!2sza"
        width="800"
        height="600"
        style="border: 0"
        allowfullscreen=""
        referrerpolicy="no-referrer-when-downgrade"
        v-if="this.loc === 'seapoint'"
      ></iframe>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.770666519031!2d2.356101315674781!3d48.79239097928396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0%3A0xfedc0b0b0b0b0b0b!2sEFREI%20-%20%C3%89cole%20d&#39;ing%C3%A9nieurs%20g%C3%A9n%C3%A9ralistes!5e0!3m2!1sen!2sfr!4v1635898378989!5m2!1sen!2sfr"
            width="800"
            height="600"
            style="border: 0"
            allowfullscreen=""
            referrerpolicy="no-referrer-when-downgrade"
            v-if="this.loc === 'villejuif'"
        ></iframe>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.770666519031!2d2.356101315674781!3d48.79239097928396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0%3A0xfedc0b0b0b0b0b0b!2sEFREI%20-%20%C3%89cole%20d&#39;ing%C3%A9nieurs%20g%C3%A9n%C3%A9ralistes!5e0!3m2!1sen!2sfr!4v1635898378989!5m2!1sen!2sfr"
            width="800"
            height="600"
            style="border: 0"
            allowfullscreen=""
            referrerpolicy="no-referrer-when-downgrade"
            v-if="this.loc === 'paris'"
        ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopView",
  data() {
    return {
      loc: "waterfront",
    };
  },
};
</script>

<style scoped>
.shop {
  margin-top: 0px;
  width: 80%;
  padding: 10%;
}
h1 {
  font-size: 3em;
  font-weight: 800;
  color: #333;
  margin-bottom: 50px;
}
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.liste {
  width: 40%;
  background-color: white;
  border-radius: 20px;

  height: 600px;
  overflow-y:scroll;
}
iframe {
  border-radius: 20px;
  background-color: lightgrey;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  padding-top: 10px;
  list-style: none;
  padding-left: 10%;
  border-bottom: #333 solid 1px;
  width: 90%;
}
li:hover {
  border-radius: 20px;
  background-color: #f3f3f3;
}
h3 {
  font-weight: 400;
  font-size: 1.2em;
}
h2 {
  font-weight: 800;
}
p {
  font-weight: 400;
  font-size: 1em;
  margin-bottom: 0;
}
</style>