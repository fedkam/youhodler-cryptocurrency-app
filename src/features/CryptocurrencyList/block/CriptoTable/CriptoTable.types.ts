import { WithClassName } from "@/src/common/types/WithClassName";
import { ColDef } from "ag-grid-community";

export interface CriptoTableRow {
  name: string;
  rate: number;
  diff24h: number;
}

export type CriptoTableCol = ColDef<CriptoTableRow>;

export type CriptoTableProps = WithClassName<{
  rows: CriptoTableRow[];
  cols: CriptoTableCol[];
}>;
