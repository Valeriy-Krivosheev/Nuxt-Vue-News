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
