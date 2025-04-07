"use client";

import { useState } from "react";
import { CriptoTableProps } from "./CriptoTable.types";
import { AgGridReact } from "ag-grid-react";
import cn from "classnames";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import styles from "./CriptoTable.module.css";

// NOTE: Слой таблицы для списка криптовалют

ModuleRegistry.registerModules([AllCommunityModule]);

export function CriptoTable({ rows, cols, className }: CriptoTableProps) {
  const [rowData] = useState(rows);
  const [colDefs] = useState(cols);

  console.log("CriptoTable", rows, cols);

  return (
    <div className={cn(styles.root, className)}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}
