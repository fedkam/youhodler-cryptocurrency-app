"use client";

import { useCallback, useState } from "react";
import { CriptoTableProps, CriptoTableRow } from "./CriptoTable.types";
import { AgGridReact } from "ag-grid-react";
import cn from "classnames";
import {
  AllCommunityModule,
  colorSchemeDarkBlue,
  ModuleRegistry,
  RowClickedEvent,
  themeQuartz,
} from "ag-grid-community";
import styles from "./CriptoTable.module.css";
import { useRouter } from "next/navigation";
import { cryptoDetailsRoute } from "@/src/routes/routes";

// NOTE: Слой таблицы для списка криптовалют

ModuleRegistry.registerModules([AllCommunityModule]);
const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);

export function CriptoTable({ rows, cols, className }: CriptoTableProps) {
  const [rowData] = useState(rows);
  const [colDefs] = useState(cols);
  const router = useRouter();

  const onRowClicked = useCallback(
    (event: RowClickedEvent<CriptoTableRow>) => {
      if (!event.data?.name) {
        console.error("Error: event.data.name is missing", event);
        return;
      }
      router.push(cryptoDetailsRoute(event.data.name));
    },
    [router]
  );

  return (
    <div className={cn(styles.root, className)}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection="single"
        suppressCellFocus={true}
        onRowClicked={onRowClicked}
        theme={themeDarkBlue}
        rowClass={styles.rowHover}
      />
    </div>
  );
}
