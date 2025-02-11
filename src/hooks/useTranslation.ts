"use client";

import { useParams } from "next/navigation";
import { getTranslation } from "@/lib/getTranslation"; // Import the new server function

export const useTranslation = () => {
  const params = useParams();
  const locale = (params?.lang as string) || "en"; // Default to English

  const t = (key: string, variables?: Record<string, string>) => {
    return getTranslation(locale, key, variables); // Use the same logic as server-side
  };

  return { t, locale };
};
