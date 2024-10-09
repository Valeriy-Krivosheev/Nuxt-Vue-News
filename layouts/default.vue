<template>
  <div class="min-h-screen flex flex-col">
    <BaseSidebar />
    <div class="p-4 sm:ml-64 bg-lightBlue dark:bg-darkBlue">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseSidebar from "~/components/base/BaseSidebar.vue";
</script>
