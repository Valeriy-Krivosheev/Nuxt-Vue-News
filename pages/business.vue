<template>
  <div class="container">
    <h1
      class="text-5xl font-bold text-gray-800 px-4 py-6 dark:text-white text-center"
    >
      Today's business news
    </h1>
    <div class="p-4 grid grid-cols-4 gap-6 mb-10" v-if="status === 'pending'">
      <loading-skeleton v-for="item in 10" :key="item" />
    </div>
    <list-item
      v-else-if="status === 'success'"
      class="p-4 grid grid-cols-4 gap-6 mb-10"
    >
      <news-item v-for="(item, i) in articles" :key="i" :item="item" />
    </list-item>
  </div>
</template>

<script lang="ts" setup>
import type { newsItem, newsData } from "~/types";
import { useNewsStore } from "~/store";
const newsStore = useNewsStore();
const { data: newsList, status } = await useAsyncData<newsData>(() =>
  newsStore.fetchNews("top-headlines", "business"),
);
const { articles } = newsList.value;
</script>
