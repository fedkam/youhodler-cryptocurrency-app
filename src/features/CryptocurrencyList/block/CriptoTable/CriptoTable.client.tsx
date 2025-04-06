"use client";

import { useState } from "react";
import { CriptoTableProps } from "./CriptoTable.types";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

// NOTE: Слой таблицы для списка криптовалют

ModuleRegistry.registerModules([AllCommunityModule]);

export function CriptoTable({ rows, cols }: CriptoTableProps) {
  const [rowData, setRowData] = useState(rows);
  const [colDefs, setColDefs] = useState(cols);

  console.log("CriptoTable", rows, cols);

  // NOTE: РАЗОБРАТЬСЯ С ВЫСОТОЙ И ВИРТУАЛИЗАЦИЕЙ
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <AgGridReact
        domLayout="autoHeight"
        rowData={rowData}
        columnDefs={colDefs}
      />
    </div>
  );
}
