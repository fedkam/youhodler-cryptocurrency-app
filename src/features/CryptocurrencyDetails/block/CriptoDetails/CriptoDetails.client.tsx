"use client";

import { DetailsHeader } from "../../ui/DetailsHeader/DetailsHeader.client";
import styles from "./CriptoDetails.module.css";
import { useExtraCurrencyDetailsSuspenseQuery } from "@/src/queries/useExtraCurrencyDetailsSuspenseQuery/useExtraCurrencyDetailsSuspenseQuery";
import { Suspense } from "react";

export function CriptoDetails({ ticker }: { ticker: string }) {
  const { data: extraCurrencyDetailsData } =
    useExtraCurrencyDetailsSuspenseQuery({
      currency: ticker,
    });
  // const { data } = useExtendedRatesSuspenseQuery({ currency: "usd" });

  console.log("data2", extraCurrencyDetailsData);

  return (
    <div className={styles.root}>
      <Suspense fallback={<p>Loading...</p>}>
        <DetailsHeader
          name={ticker}
          fullName={extraCurrencyDetailsData.fullName}
          description={extraCurrencyDetailsData.description}
          imageUrl={extraCurrencyDetailsData.imageUrl}
        />
      </Suspense>
      <p>Details about a specific cryptocurrency will be displayed here.</p>
    </div>
  );
}
