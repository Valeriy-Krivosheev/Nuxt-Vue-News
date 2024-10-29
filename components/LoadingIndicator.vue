<template>
  <div class="flex justify-center items-center space-x-2">
    <div
      v-for="(ball, index) in 4"
      :key="index"
      class="w-4 h-4 bg-blue-500 rounded-full animate-pulse"
      :style="`animation-delay: ${index * 150}ms;`"
    ></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.animate-pulse {
  animation: pulse 1s infinite;
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}
</style>
