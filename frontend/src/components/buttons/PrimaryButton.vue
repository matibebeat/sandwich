<script>
export default {
  name: "PrimaryButton"
}
</script>

<template>
  <button class="primary-button">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  margin-left: 1em;
  border: none;
  background: red;
  padding: 15px 20px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
}

button:hover {
  background: lightpink;
}

</style>