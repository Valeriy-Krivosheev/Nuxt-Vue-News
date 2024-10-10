import { defineStore } from "pinia";
import type { newsData, newsItem } from "~/types";

export const useNewsStore = defineStore("newsStore", () => {
  const API_KEY = useRuntimeConfig().public.apiKey;
  const newsList = ref<newsItem[]>([]);
  const fetchNews = async () => {
    const { data } = await useFetch<newsData>(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    );
    newsList.value = data.value!.articles;
  };
  return { fetchNews, newsList };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNewsStore, import.meta.hot));
}
