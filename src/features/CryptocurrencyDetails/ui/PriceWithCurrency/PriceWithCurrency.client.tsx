"use client";

import styles from "./PriceWithCurrency.module.css";

export function PriceWithCurrency({
  price,
  currency = "$",
}: {
  price: number;
  currency?: string;
}) {
  return (
    <div className={styles.root}>
      <span className={styles.price}>
        {price}
        <span className={styles.currency}>{currency}</span>
      </span>
    </div>
  );
}
