import { defineStore } from "pinia";
import type { newsData } from "~/types";

export const useNewsStore = defineStore("newsStore", () => {
  const API_KEY = useRuntimeConfig().public.apiKey;
  const fetchNews = async (
    value: string = "top-headlines",
    category: string = "",
    pageSize: number = 16,
    page = 1,
  ) => {
    const data: newsData = await $fetch(
      `https://newsapi.org/v2/${value}?country=us&apiKey=${API_KEY}`,
      {
        params: {
          category,
          pageSize,
          page,
        },
      },
    );
    return data;
  };
  return { fetchNews };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNewsStore, import.meta.hot));
}
