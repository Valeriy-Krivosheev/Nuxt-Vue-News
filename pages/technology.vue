<template>
  <div class="container">
    <h1
      class="text-5xl font-bold text-gray-800 px-4 py-6 dark:text-white text-center"
    >
      Today's technology news
    </h1>
    <div class="p-4 grid grid-cols-4 gap-6 mb-10" v-if="status === 'pending'">
      <loading-skeleton v-for="item in 10" :key="item" />
    </div>
    <list-item
      v-else-if="status === 'success'"
      class="p-4 grid grid-cols-4 gap-6 mb-10"
    >
      <news-item v-for="(item, i) in filteredArticles" :key="i" :item="item" />
    </list-item>
    <loading-indicator v-if="isLoading" />
  </div>
</template>

<script lang="ts" setup>
import type { newsItem, newsData } from "~/types";
import { useNewsStore } from "~/store";
import { usePageScroll, useScrollObserver } from "~/composables/usePageScroll";
import { isNeedLoading } from "~/composables/useCommon";
const newsStore = useNewsStore();
const { data: newsList, status } = await useAsyncData<newsData>(
  "technology-news",
  () => newsStore.fetchNews("top-headlines", "technology"),
);
const { articles } = newsList.value;
const { isNearBottom } = usePageScroll();
const page = ref(1);
const isLoading = ref(false);

const filteredArticles = computed(() =>
  articles.filter((item) => item.title !== "[Removed]"),
);

const scrollRequest = async () => {
  isLoading.value = true;
  const data = await newsStore.fetchNews<Promise<newsData>>(
    "top-headlines",
    "technology",
    16,
    ++page.value,
  );
  articles.push(...data.articles);
  isLoading.value = false;
};

useScrollObserver(
  isNearBottom,
  newsList.value?.totalResults,
  articles,
  scrollRequest,
  isNeedLoading,
);
</script>
