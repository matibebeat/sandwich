<template>
  <div class="review">
    <h1>Write a Review</h1>
    <form @submit.prevent="submitReview">
      <label for="grade">Grade:  {{ grade }}</label>
      <input type="range" min="0" max="5" v-model="grade" id="grade" />
      <br />
      <label for="review">Review:</label>
      <textarea v-model="review" id="review"></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      grade: 0,
      review: "",
    };
  },
  methods: {
    submitReview() {
      axios
        .post("http://localhost:4000/api/review", {
          grade: this.grade,
          content: this.review,
          name: JSON.parse(localStorage.getItem("user")).name,
          date: new Date(),
        })
        .then(() => {
          alert("Review has been posted!");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
label{
  font-size: 2em;
  font-weight: 800;
  color: #333;
}
.review {
  padding: 5% 10%;
  margin-top: 100px;
  width: 80%;

}
  h1 {
    font-size: 3.5em;
    font-weight: 800;
    color: #333;
    margin-bottom: 0.25em;
  }
  input[type="range"] {
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 400px;
    font-size: 3em;
    font-family: "Roboto", sans-serif;
  }
button {
  border: none;
  background: red;
  padding: 15px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 1.8em;
  margin-top: 1em;
  color: white;
}

button:hover {
  background: lightpink;
  cursor: pointer;
}
input[type=range] {
  height: 46px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  background: none;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 17px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #F8F8F8;
  border-radius: 12px;
  border: none;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 4px #000000;
  border: 0px solid #000000;
  height: 40px;
  width: 50px;
  border-radius: 8px;
  background-color: red;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -11.5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #F8F8F8;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 17px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #F8F8F8;
  border-radius: 12px;
  border:none;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 4px #000000;
  border: 0px solid #000000;
  height: 40px;
  width: 50px;
  border-radius: 8px;
  background: none;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 17px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #F8F8F8;
  border: none;
  border-radius: 24px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #F8F8F8;
  border: none;
  border-radius: 24px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 4px #000000;
  border: 0px solid #000000;
  height: 40px;
  width: 50px;
  border-radius: 8px;
  background: red;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #F8F8F8;
}
input[type=range]:focus::-ms-fill-upper {
  background: #F8F8F8;
}

</style>
