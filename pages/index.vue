<template>
  <div class="container">
    <NuxtLoadingIndicator color="green" error-color="red" :duration="3000" />
    <h1
      class="text-5xl font-bold text-gray-800 px-4 py-6 dark:text-white text-center"
    >
      Today's breaking news {{ statusRequest }}
    </h1>

    <list-item class="p-4 grid grid-cols-4 gap-6 mb-10">
      <news-item v-for="(item, i) in newsList" :key="i" :item="item" />
    </list-item>
  </div>
</template>

<script lang="ts" setup>
import type { newsItem } from "~/types";
import { useNewsStore } from "~/store";

const { fetchNews, newsList, statusRequest } = useNewsStore();
fetchNews();
</script>
