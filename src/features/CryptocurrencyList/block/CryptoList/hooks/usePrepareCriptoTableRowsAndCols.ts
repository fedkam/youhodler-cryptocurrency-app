import { CurrencyType } from "@/src/servises/getExtendedRates/getExtendedRates.types";
import {
  CriptoTableCol,
  CriptoTableRow,
} from "../../CriptoTable/CriptoTable.types";
import { useMemo } from "react";
import { convertDiff24hToPercentage } from "@/src/common/utils/convertDiff24hToPercentage";

/** Хук готовит структуру для отображения в таблице */
export function usePrepareCriptoTableRowsAndCols({
  data,
}: {
  data: CurrencyType;
}): {
  rows: CriptoTableRow[];
  cols: CriptoTableCol[];
} {
  const rows: CriptoTableRow[] = useMemo(
    () =>
      Object.entries(data).map(([key, value]) => ({
        name: key,
        rate: value.rate,
        diff24h: convertDiff24hToPercentage({
          rate: value.rate,
          diff24h: value.diff24h,
        }),
      })),
    [data]
  );

  const cols: CriptoTableCol[] = [
    { field: "name", headerName: "Name" },
    { field: "rate", headerName: "Price" },
    { field: "diff24h", headerName: "Change 24h" },
  ];

  return {
    rows,
    cols,
  };
}
