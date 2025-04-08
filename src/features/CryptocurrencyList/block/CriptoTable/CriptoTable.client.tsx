"use client";

import { useCallback, useMemo, useState } from "react";
import { CriptoTableProps, CriptoTableRow } from "./CriptoTable.types";
import { AgGridReact } from "ag-grid-react";
import cn from "classnames";
import {
  AllCommunityModule,
  ModuleRegistry,
  RowClickedEvent,
} from "ag-grid-community";
import styles from "./CriptoTable.module.css";
import { useRouter } from "next/navigation";
import { cryptoDetailsRoute } from "@/src/routes/routes";

ModuleRegistry.registerModules([AllCommunityModule]);

/** Таблица с криптовалютами */
export function CriptoTable({ rows, cols, className }: CriptoTableProps) {
  const [rowData] = useState(rows);
  const [colDefs] = useState(cols);
  const router = useRouter();

  const defaultColDef = useMemo(() => {
    return {
      resizable: false,
    };
  }, []);

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
        rowClass={styles.rowHover}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}
