import { watch, type Ref } from "vue";
import type { newsItem, newsData } from "~/types";
export function usePageScroll(threshold: number = 200) {
  const isNearBottom = ref(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY + windowHeight;
    isNearBottom.value = documentHeight - scrollPosition <= threshold;
  };

  onMounted(() => {
    window.addEventListener("scroll", throttle(handleScroll, 250));
    handleScroll(); // Инициализируем начальное состояние
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", throttle(handleScroll, 250));
  });
  function throttle<T extends (...args: any[]) => any>(
    callee: T,
    timeout: number,
  ): (...args: Parameters<T>) => void {
    let timer: NodeJS.Timeout | null = null;

    return function perform(...args: Parameters<T>): void {
      if (timer) return;

      timer = setTimeout(() => {
        callee(...args);

        clearTimeout(timer!);
        timer = null;
      }, timeout);
    };
  }
  return {
    isNearBottom,
  };
}

export const useScrollObserver = (
  isNearBottom: Ref<boolean>,
  totalResults: number | undefined = 1,
  loadedNews: newsItem[],
  scrollRequest: () => void,
  isNeedLoading: (
    totalResults: number | undefined,
    articlesCount: number,
  ) => boolean,
) => {
  watch(
    () => isNearBottom.value,
    () => {
      if (
        isNearBottom.value &&
        isNeedLoading(totalResults, loadedNews.length)
      ) {
        scrollRequest();
      }
    },
  );
};
