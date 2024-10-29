import type { WatchSource } from "vue";
import type { NuxtApp } from "#app";

export interface newsItem {
  source: {
    id: number | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: URL;
  urlToImage: URL;
}
export type newsData = {
  status: string;
  totalResults: number;
  articles: newsItem[];
};

// type AsyncDataOptions<DataT> = {
//   server?: boolean;
//   lazy?: boolean;
//   immediate?: boolean;
//   deep?: boolean;
//   dedupe?: "cancel" | "defer";
//   default?: () => DataT | Ref<DataT> | null;
//   transform?: (input: DataT) => DataT | Promise<DataT>;
//   pick?: string[];
//   watch?: WatchSource[];
//   getCachedData?: (key: string, nuxtApp: NuxtApp) => DataT;
// };
//
// export type AsyncData<DataT, ErrorT> = {
//   data: Ref<DataT | null>;
//   refresh: (opts?: AsyncDataExecuteOptions) => Promise<void>;
//   execute: (opts?: AsyncDataExecuteOptions) => Promise<void>;
//   clear: () => void;
//   error: Ref<ErrorT | null>;
//   status: Ref<AsyncDataRequestStatus>;
// };
//
// interface AsyncDataExecuteOptions {
//   dedupe?: "cancel" | "defer";
// }
//
// type AsyncDataRequestStatus = "idle" | "pending" | "success" | "error";
