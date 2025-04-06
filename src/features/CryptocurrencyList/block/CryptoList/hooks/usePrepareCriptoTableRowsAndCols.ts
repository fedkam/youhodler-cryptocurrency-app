import { CurrencyType } from "@/src/servises/getExtendedRates/getExtendedRates.types";
import {
  CriptoTableCol,
  CriptoTableRow,
} from "../../CriptoTable/CriptoTable.types";

/** Хук готовит структуру для отображения в таблице */
export function usePrepareCriptoTableRowsAndCols({
  data,
}: {
  data: CurrencyType;
}): {
  rows: CriptoTableRow[];
  cols: CriptoTableCol[];
} {
  const rows: CriptoTableRow[] = Object.entries(data).map(([key, value]) => ({
    name: key,
    ask: value.ask,
    diff24h: value.diff24h,
  }));

  const cols: CriptoTableCol[] = [
    { field: "name", headerName: "Name" },
    { field: "ask", headerName: "Price" },
    { field: "diff24h", headerName: "Change 24h" },
  ];

  return {
    rows,
    cols,
  };
}
