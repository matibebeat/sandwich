/*make a vue page to login, with all the fonction to send a login request*/

<template>
  <div class="login">
    <div class="login__container">
      <h1 class="login__title">Sign in</h1>
      <form class="login__form" @submit.prevent="login">
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
        <button type="submit" class="btn btn--primary btn--block">
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script>
/*import axios*/
import axios from "axios";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:3000/api/auth/login", {
          email: this.email,
          password: this.password,
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
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login__container {
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.login__title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
}

.login__form {
  display: flex;
  flex-direction: column;
}

.form__group {
  margin-bottom: 20px;
}

.form__group label {
  display: block;
  margin-bottom: 5px;
  font-size: 1.2rem;
  font-weight: 500;
}

.form__input {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn--primary {
  background-color: #007bff;
  color: #fff;
}

.btn--block {
  display: block;
  width: 100%;
}
</style>

