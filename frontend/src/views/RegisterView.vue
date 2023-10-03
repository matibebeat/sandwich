/*make a vue page to registe, with all the fonction to send a register request*/

<template>
  <div class="register">
    <div class="register__container">
      <h1 class="register__title">Sign up</h1>
      <form class="register__form" @submit.prevent="register">
        <div class="form__group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form__input"
            placeholder="Email"
            required
          />
        </div>
        <div class="form__group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form__input"
            placeholder="Password"
            required
          />
        </div>
        <div class="form__group">
          <label for="passwordConfirm">Confirm password</label>
          <input
            type="password"
            id="passwordConfirm"
            v-model="passwordConfirm"
            class="form__input"
            placeholder="Confirm password"
            required
          />
        </div>
        <button type="submit" class="btn btn--primary btn--block">
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
/*import axios*/
import axios from "axios";

export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    register() {
      axios
        .post("http://localhost:3000/api/auth/register", {
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.register__container {
  width: 100%;
  max-width: 30rem;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
.register__title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}
.register__form {
  display: flex;
  flex-direction: column;
}
.form__group {
  margin-bottom: 1rem;
}
.form__group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
}
.form__input {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1.2rem;
}
.btn {
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
}
.btn--primary {
  color: #fff;
  background-color: #007bff;
  border: 1px solid #007bff;
}
.btn--primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}
.btn--block {
  display: block;
  width: 100%;
}
</style>
```
