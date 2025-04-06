"use client";

import { useExtendedRatesSuspenseQuery } from "@/src/queries/useExtendedRatesSuspenseQuery/useExtendedRatesSuspenseQuery";
import { CriptoTable } from "../CriptoTable/CriptoTable";

// Слой данных, аналитики итд

export function CryptoList() {
  const { data } = useExtendedRatesSuspenseQuery();
  // const selectedCurrencyData = data["usd"];

  console.log("data", data["usd"]["om"]);

  return <CriptoTable />;
}
