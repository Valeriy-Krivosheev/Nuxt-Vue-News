import { defineStore } from "pinia";

export const useNewsStore = defineStore("newsStore", () => {
  const fetchNews = async () => {
    return useFetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=ab075faaff8b4d87a328d2e19eeccc2f",
    );
  };
  return { fetchNews };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNewsStore, import.meta.hot));
}
