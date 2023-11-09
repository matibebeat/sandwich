<template>
  <div class="profilePanel">
    <div class="profile">
      <div class="profile__container">
        <h1 class="profile__title">Profile</h1>
        <form class="profile__form" @submit.prevent="updateProfile">
          <div class="form__group">
            <label for="name">Name</label>
            <input
                type="text"
                id="name"
                v-model="user.name"
                class="form__input"
                placeholder="Name"
                required
            />
          </div>
          <div class="form__group">
            <label for="email">Email</label>
            <input
                type="email"
                id="email"
                v-model="user.email"
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
                v-model="user.password"
                class="form__input"
                placeholder="Password"
                required
            />
          </div>
          <div class="form__group">
            <label for="address">Address</label>
            <input
                type="text"
                id="address"
                v-model="user.address"
                class="form__input"
                placeholder="Address"
                required
            />
          </div>
          <div class="form__group">
            <label for="phone">Phone</label>
            <input
                type="text"
                id="phone"
                v-model="user.phone"
                class="form__input"
                placeholder="Phone"
                required
            />
          </div>
          <button type="submit" class="btn btn--primary btn--block">
            Update
          </button>
          <button type="button" class="btn btn--primary btn--block" @click="this.showAlertChoice = true">
            Delete

          </button>
        </form>
      </div>
    </div>
    <AlertComponent type="update" message="Your profile has been updated"  v-if="this.showAlert" @close="showAlert = false"/>
    <AlertComponent type="error" message="An error has occurred, try latter"  v-if="this.showAlertError" @close="showAlertError = false"/>
    <AlertComponent type="Choice" message="Do you want to delete your account ?, belek ca reviens pas après"  v-if="this.showAlertChoice" @close="showAlertChoice = false" @delete="deleteProfile"/>
  </div>

</template>
<script>
import AlertComponent from "@/components/utils/AlertComponent.vue";
import axios from "axios";
export default {
  name: 'ProfileView',
  components: {AlertComponent},
  data() {
    return {
      user: {},
      showAlert: false,
      showAlertError: false,
      showAlertChoice: false,

    };
  },
  mounted() {
    /*retrieve user.id from local storage*/
    let user = localStorage.getItem("user");
    let id = JSON.parse(user)._id;
    if(id == undefined){
      id=JSON.parse(user).id;
    }
    /*fetch the user corresponding to the id*/
    axios
        .get("http://localhost:4000/api/profile/"+id)
        .then((response) => {
          this.user = response.data;
          console.log(this.user);
        })
        .catch((error) => {
          console.log(error);
        });
  },
  methods: {
    deleteProfile() {
      /*delete the user*/
      axios
          .delete("http://localhost:4000/api/profile/"+this.user._id)
          .then((response) => {
            console.log(response.data);
            /*delete the user in local storage*/
            localStorage.removeItem("user");
            /*redirect to the profile page*/
            this.$emit("logout");
            this.$router.push("/login");
          })
          .catch((error) => {
            console.log(error);
          });
    },
    updateProfile() {
      /*update the user*/
      axios
          .put("http://localhost:4000/api/profile/"+this.user._id, {
            name: this.user.name,
            email: this.user.email,
            password: this.user.password,
            address: this.user.address,
            phone: this.user.phone,

          })
          .then((response) => {
            console.log(response.data);
            /*update the user in local storage*/
            localStorage.setItem("user", JSON.stringify(response.data));
            /*redirect to the profile page*/
            /*show the alert*/
            this.showAlert = true;

          })
          .catch((error) => {
            this.showAlertError = true;
            console.log(error);
          });
    },
  },
}
</script>
<style scoped>

.profilePanel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


.profile__container {
  width: 100%;
  max-width: 600px;
  padding: 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.profile__title {
  text-align: center;
  margin-bottom: 20px;
}


.profile__form {
  display: flex;
  flex-direction: column;
}

.form__group {
  margin-bottom: 20px;
}

.form__input {
  width: 91%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn--primary {
  background-color: #f00;
  color: #fff;
}

.btn--block {
  display: block;
  width: 100%;
}
button{
  margin-top: 20px;

  border-radius: 11px;
  padding:       10px 25px;
  color:         #333;
  display:       inline-block;
  font:          normal bold 14px/1  "Open Sans", sans-serif;
  text-align:    center;
}


</style>