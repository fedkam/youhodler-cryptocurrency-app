"use client";

import { useExtendedRatesSuspenseQuery } from "@/src/queries/useExtendedRatesSuspenseQuery/useExtendedRatesSuspenseQuery";
import { CriptoTable } from "../CriptoTable/CriptoTable.client";
import { usePrepareCriptoTableRowsAndCols } from "./hooks/usePrepareCriptoTableRowsAndCols";
import styles from "./CryptoList.module.css";
import cn from "classnames";
import { SeoCriptoTable } from "../SeoCriptoTable/SeoCriptoTable.client";
import { CryptoListProps } from "./CryptoList.types";

//NOTE: Слой для запроса данных, работы с аналитикой итд

const CURRENCY = "usd";

/** Список криптовалют */
export function CryptoList({ isBot = false, className }: CryptoListProps) {
  const { data } = useExtendedRatesSuspenseQuery({ currency: CURRENCY });

  const { rows, cols } = usePrepareCriptoTableRowsAndCols({
    data,
    currentCurrency: CURRENCY,
  });

  return (
    <div className={cn(styles.root, className)}>
      {isBot ? (
        <SeoCriptoTable
          rows={rows}
          cols={cols}
          className={styles.criptoTableWrapper}
        />
      ) : (
        <CriptoTable
          rows={rows}
          cols={cols}
          className={styles.criptoTableWrapper}
        />
      )}
    </div>
  );
}
