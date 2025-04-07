"use client";

import { useExtendedRatesSuspenseQuery } from "@/src/queries/useExtendedRatesSuspenseQuery/useExtendedRatesSuspenseQuery";
import { CriptoTable } from "../CriptoTable/CriptoTable.client";
import { usePrepareCriptoTableRowsAndCols } from "./hooks/usePrepareCriptoTableRowsAndCols";
import styles from "./CryptoList.module.css";
import { WithClassName } from "@/src/common/types/WithClassName";
import cn from "classnames";

//NOTE: Слой для запроса данных, работы с аналитикой итд

/** Список криптовалют */
export function CryptoList({ className }: WithClassName) {
  const { data } = useExtendedRatesSuspenseQuery();
  const selectedCurrencyData = data["usd"];

  const { rows, cols } = usePrepareCriptoTableRowsAndCols({
    data: selectedCurrencyData,
  });

  return (
    <div className={cn(styles.root, className)}>
      <CriptoTable
        rows={rows}
        cols={cols}
        className={styles.criptoTableWrapper}
      />
    </div>
  );
}
