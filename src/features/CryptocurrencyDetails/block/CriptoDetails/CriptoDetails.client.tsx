"use client";

import { useExtendedRatesSuspenseQuery } from "@/src/queries/useExtendedRatesSuspenseQuery/useExtendedRatesSuspenseQuery";
import { DetailsHeader } from "../../ui/DetailsHeader/DetailsHeader.client";
import styles from "./CriptoDetails.module.css";
import { useExtraCurrencyDetailsSuspenseQuery } from "@/src/queries/useExtraCurrencyDetailsSuspenseQuery/useExtraCurrencyDetailsSuspenseQuery";
import { Suspense } from "react";
import { PriceList } from "../../ui/PriceList/PriceList.client";

export function CriptoDetails({ ticker }: { ticker: string }) {
  const { data: extraCurrencyDetailsData } =
    useExtraCurrencyDetailsSuspenseQuery({
      currency: ticker,
    });
  const { data: extendedRates } = useExtendedRatesSuspenseQuery({
    currency: "usd",
  });
  const { rate, ask, bid, diff24h } = extendedRates[ticker] || {};

  return (
    <div className={styles.root}>
      <Suspense fallback={<p>Loading... DetailsHeader</p>}>
        <DetailsHeader
          name={ticker}
          fullName={extraCurrencyDetailsData.fullName}
          description={extraCurrencyDetailsData.description}
          imageUrl={extraCurrencyDetailsData.imageUrl}
        />
      </Suspense>
      <Suspense fallback={<p>Loading... PriceList</p>}>
        <PriceList rate={rate} ask={ask} bid={bid} diff24h={diff24h} />
      </Suspense>
    </div>
  );
}
