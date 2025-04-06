import { ColDef } from "ag-grid-community";

export interface CriptoTableRow {
  name: string;
  ask: number;
  diff24h: number;
}

export type CriptoTableCol = ColDef<CriptoTableRow>;

export type CriptoTableProps = {
  rows: CriptoTableRow[];
  cols: CriptoTableCol[];
};
