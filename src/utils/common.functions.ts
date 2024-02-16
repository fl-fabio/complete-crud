import { PaginatedResponse } from "../types/paginatedResponse.interface";

export const getAll = <T>(
  data: T[],
  filters: (keyof T)[],
  query: { [key: string]: string | number }
): PaginatedResponse<T> => {
  let filteredResults = [...data];
  const { skip, limit, ...queryFilters } = query;

  filters.forEach((filter) => {
    queryFilters[filter as string] &&
      (filteredResults = filteredResults.filter(
        (result) => result[filter] === query[filter as string]
      ));
  });

  if (skip !== undefined && limit !== undefined) {
    filteredResults = filteredResults.slice(
      skip as number,
      (skip as number) + (limit as number)
    );
  }

  return {
    total: data.length,
    results: filteredResults,
  };
};
