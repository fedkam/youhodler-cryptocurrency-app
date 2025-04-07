import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getExtendedRatesQueryOptions } from "@/src/queries/useExtendedRatesSuspenseQuery/getExtendedRatesQueryOptions";

export default async function CryptocurrencyDetails() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getExtendedRatesQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>123</div>
    </HydrationBoundary>
  );
}
