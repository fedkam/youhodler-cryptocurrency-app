import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getExtendedRatesQueryOptions } from "@/src/queries/useExtendedRatesSuspenseQuery/getExtendedRatesQueryOptions";
import { CriptoDetails } from "@/src/features/CryptocurrencyDetails/block/CriptoDetails.client";
import styles from "./page.module.css";

export default async function CryptocurrencyDetails() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getExtendedRatesQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={styles.root}>
        <CriptoDetails />
      </div>
    </HydrationBoundary>
  );
}
