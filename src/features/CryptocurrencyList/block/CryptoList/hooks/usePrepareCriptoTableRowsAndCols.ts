import { CurrencyType } from "@/src/servises/getExtendedRates/getExtendedRates.types";
import {
  CriptoTableCol,
  CriptoTableRow,
} from "../../CriptoTable/CriptoTable.types";
import { useMemo } from "react";
import { convertDiff24hToPercentage } from "@/src/common/utils/convertDiff24hToPercentage";
import { PercentageDifferenceCell } from "../../CriptoTable/subComponents/PercentageDifferenceCell/PercentageDifferenceCell.client";
import { PriceCell } from "../../CriptoTable/subComponents/PriceCell/PriceCell.client";

/** Хук готовит структуру для отображения в таблице */
export function usePrepareCriptoTableRowsAndCols({
  data,
  currentCurrency,
}: {
  data: CurrencyType;
  currentCurrency: string;
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
    {
      field: "name",
      headerName: "Name",
      filter: true,
    },
    {
      field: "rate",
      headerName: `Price (${currentCurrency.toUpperCase()})`,
      cellRenderer: PriceCell,
      filter: true,
    },
    {
      field: "diff24h",
      headerName: "Change 24h",
      cellRenderer: PercentageDifferenceCell,
      filter: true,
    },
  ];

  return {
    rows,
    cols,
  };
}
