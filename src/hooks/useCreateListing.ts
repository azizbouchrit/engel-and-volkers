import { useState } from "react";
import type { Listing } from "../types/listing";

interface UseCreateListingResult {
  createListing: (data: Omit<Listing, "id">) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function useCreateListing(): UseCreateListingResult {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createListing = async (data: Omit<Listing, "id">) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || `HTTP error! status: ${res.status}`);
      }

    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  return { createListing, isLoading, error };
}
