<template>
  <div class="min-h-screen flex flex-col">
    <BaseHeader />
    <div class="mt-16">
      <BaseSidebar />
      <div class="p-4 sm:ml-64 bg-lightBlue dark:bg-darkBlue">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseHeader from "~/components/base/BaseHeader.vue";
import BaseSidebar from "~/components/base/BaseSidebar.vue";
</script>
