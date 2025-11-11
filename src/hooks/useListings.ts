import { useEffect, useState } from "react";
import { Listing } from "../types";
import { useFiltersContext } from "../Modules/Properties/FiltersContext";

interface UseListingsParams {
  sortBy?: keyof Listing;
  sortOrder?: "ASC" | "DESC";
  query?: string;
}

interface UseListingsResult {
  data: Listing[];
  isLoading: boolean;
  error: string | null;
}

export function useListings(): UseListingsResult {
  const [data, setData] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

    const { sortBy, sortOrder, query } = useFiltersContext();


  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchListings() {
      setIsLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();

        if (sortBy) params.append("sortBy", sortBy);
        if (sortOrder) params.append("sortOrder", sortOrder);
        if (query) params.append("query", query);

        const res = await fetch(
          `/api/properties?${params.toString()}`,
          { signal }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = (await res.json()) as Listing[];
        setData(json);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    }

    fetchListings();

    return () => controller.abort();
  }, [sortBy, sortOrder, query]);

  return { data, isLoading, error };
}
