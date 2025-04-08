import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getExtendedRatesQueryOptions } from "@/src/queries/useExtendedRatesSuspenseQuery/getExtendedRatesQueryOptions";
import { CryptoList } from "@/src/features/CryptocurrencyList/block/CryptoList/CryptoList.client";
import { isBotOnlyServer } from "@/src/common/utils/isBotOnlyServer";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getExtendedRatesQueryOptions());

  const isBot = await isBotOnlyServer();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CryptoList isBot={isBot} />
    </HydrationBoundary>
  );
}
