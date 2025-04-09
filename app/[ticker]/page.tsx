import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getExtendedRatesQueryOptions } from "@/src/queries/useExtendedRatesSuspenseQuery/getExtendedRatesQueryOptions";
import { CriptoDetails } from "@/src/features/CryptocurrencyDetails/block/CriptoDetails/CriptoDetails.client";
import styles from "./page.module.css";
import { CryptocurrencyDetailsPageParams } from "./page.types";
import { getExtraCurrencyDetailsQueryOptions } from "@/src/queries/useExtraCurrencyDetailsSuspenseQuery/getExtraCurrencyDetailsQueryOptions";
import { Breadcrumbs } from "@/src/common/components/Breadcrumbs/Breadcrumbs.client";
import { getQueryClient } from "@/src/common/providers/QueryInitializeProvider/utils/getQueryClient";

export default async function CryptocurrencyDetailsPage({
  params,
}: CryptocurrencyDetailsPageParams) {
  const { ticker } = await params;
  const queryClient = getQueryClient();

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
