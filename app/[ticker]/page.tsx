import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getExtendedRatesQueryOptions } from "@/src/queries/useExtendedRatesSuspenseQuery/getExtendedRatesQueryOptions";
import { CriptoDetails } from "@/src/features/CryptocurrencyDetails/block/CriptoDetails/CriptoDetails.client";
import styles from "./page.module.css";
import { CryptocurrencyDetailsPageParams } from "./page.types";
import { getExtraCurrencyDetailsQueryOptions } from "@/src/queries/useExtraCurrencyDetailsSuspenseQuery/getExtraCurrencyDetailsQueryOptions";
import { Breadcrumbs } from "@/src/common/components/Breadcrumbs/Breadcrumbs.client";

export default async function CryptocurrencyDetailsPage({
  params,
}: CryptocurrencyDetailsPageParams) {
  const { ticker } = await params;
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(getExtendedRatesQueryOptions()),
    queryClient.prefetchQuery(
      getExtraCurrencyDetailsQueryOptions({ currency: ticker })
    ),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Breadcrumbs />
      <div className={styles.root}>
        <CriptoDetails ticker={ticker} />
      </div>
    </HydrationBoundary>
  );
}
