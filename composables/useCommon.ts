export const isNeedLoading = (
  totalResults: number | undefined = 0,
  loadedResults: number,
) => {
  return totalResults !== loadedResults;
};
