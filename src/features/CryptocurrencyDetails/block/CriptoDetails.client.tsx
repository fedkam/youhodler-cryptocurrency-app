"use client";

import { useExtendedRatesSuspenseQuery } from "@/src/queries/useExtendedRatesSuspenseQuery/useExtendedRatesSuspenseQuery";
import { useParams } from "next/navigation";
import styles from "./CriptoDetails.module.css";

export function CriptoDetails() {
  const params = useParams();
  const ticker = params.ticker;
  const { data } = useExtendedRatesSuspenseQuery({ currency: "usd" });

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{ticker}</h1>
      <p>Details about a specific cryptocurrency will be displayed here.</p>
    </div>
  );
}
