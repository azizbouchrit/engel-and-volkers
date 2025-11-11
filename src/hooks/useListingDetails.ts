import { useEffect, useState } from "react";
import { Listing } from "../types";

interface UseListingResult {
  data: Listing | null;
  isLoading: boolean;
  error: string | null;
}

export function useListingDetails(id: number): UseListingResult {
  const [data, setData] = useState<Listing | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const controller = new AbortController();
    const { signal } = controller;

    async function fetchListing() {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `/api/properties/${id}`,
          { signal }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = (await res.json()) as Listing;
        setData(json);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    }

    fetchListing();

    return () => controller.abort();
  }, [id]);

  return { data, isLoading, error };
}
