"use client";

import { useExtendedRatesSuspenseQuery } from "@/src/queries/useExtendedRatesSuspenseQuery/useExtendedRatesSuspenseQuery";
import { CriptoTable } from "../CriptoTable/CriptoTable.client";
import { usePrepareCriptoTableRowsAndCols } from "./hooks/usePrepareCriptoTableRowsAndCols";

// Слой данных, аналитики итд

/** Список криптовалют */
export function CryptoList() {
  const { data } = useExtendedRatesSuspenseQuery();
  const selectedCurrencyData = data["usd"];

  const { rows, cols } = usePrepareCriptoTableRowsAndCols({
    data: selectedCurrencyData,
  });

  return <CriptoTable rows={rows} cols={cols} />;
}
