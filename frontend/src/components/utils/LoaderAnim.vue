<script setup>

</script>

<template>
  <div class="loader">
    <div class="bar" style="margin-right: 10px;"></div>
    <div class="bar" style="margin-right: 10px;" :style="{ 'animation-delay': '0.2s' }"></div>
    <div class="bar" :style="{ 'animation-delay': '0.4s' }"></div>
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.bar {
  width: 14px;
  height: 30px;
  margin: 0 8px;
  background-color: red;
  border-radius: 2px;
  animation: loading 1s ease-in-out infinite;
}

.bar:nth-child(2) {
  animation-delay: 0.2s;
}

.bar:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes loading {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1, 2.5);
  }
  40% {
    transform: scale(1);
  }
}
</style>