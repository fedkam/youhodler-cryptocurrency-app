"use client";

import { useExtendedRatesSuspenseQuery } from "@/src/queries/useExtendedRatesSuspenseQuery/useExtendedRatesSuspenseQuery";
import { DetailsHeader } from "../../ui/DetailsHeader/DetailsHeader.client";
import styles from "./CriptoDetails.module.css";
import { useExtraCurrencyDetailsSuspenseQuery } from "@/src/queries/useExtraCurrencyDetailsSuspenseQuery/useExtraCurrencyDetailsSuspenseQuery";
import { Suspense } from "react";
import { PriceList } from "../../ui/PriceList/PriceList.client";
import { DetailsDescription } from "../../ui/DetailsDescription/DetailsDescription.client";
import { convertDiff24hToPercentage } from "@/src/common/utils/convertDiff24hToPercentage";

//NOTE: Слой для запроса данных, работы с аналитикой итд

/** Информация о криптовалюте */
export function CriptoDetails({ ticker }: { ticker: string }) {
  const { data: extraCurrencyDetailsData } =
    useExtraCurrencyDetailsSuspenseQuery({
      currency: ticker,
    });
  const { data: extendedRates } = useExtendedRatesSuspenseQuery({
    currency: "usd",
  });
  const { rate, ask, bid, diff24h } = extendedRates[ticker] || {};
  const diff24hInPercent = convertDiff24hToPercentage({ rate, diff24h });

  return (
    <div className={styles.root}>
      <Suspense fallback={<p>Loading... DetailsHeader</p>}>
        <DetailsHeader
          name={ticker}
          fullName={extraCurrencyDetailsData.fullName}
          imageUrl={extraCurrencyDetailsData.imageUrl}
        />
      </Suspense>
      <Suspense fallback={<p>Loading... DetailsDescription</p>}>
        <DetailsDescription>
          {extraCurrencyDetailsData.description}
        </DetailsDescription>
      </Suspense>
      <Suspense fallback={<p>Loading... PriceList</p>}>
        <PriceList
          rate={rate}
          ask={ask}
          bid={bid}
          diff24hInPercent={diff24hInPercent}
        />
      </Suspense>
    </div>
  );
}
