import { defineStore } from "pinia";

export const useNewsStore = defineStore("newsStore", () => {
  const API_KEY = useRuntimeConfig().public.apiKey;
  const fetchNews = async () => {
    return useFetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    );
  };
  return { fetchNews };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNewsStore, import.meta.hot));
}
