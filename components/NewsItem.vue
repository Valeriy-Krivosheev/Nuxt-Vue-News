<template>
  <li
    class="flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <img
      class="rounded-t-lg w-full h-[240px] object-cover text-center"
      :src="item.urlToImage || '/no-image.png'"
      alt="Image was removed by copyright holder"
    />
    <div class="p-5 flex flex-1 flex-col">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-3"
      >
        {{ item.title }}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
        {{ item.description }}
      </p>
      <div class="flex justify-between mt-auto items-center">
        <a
          target="_blank"
          :href="item.url"
          class="self-baseline inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-600 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more at {{ item.source.name }}
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </li>
</template>
<script lang="ts" setup>
import type { newsItem } from "~/types";
defineProps<{
  item: newsItem;
}>();
</script>
