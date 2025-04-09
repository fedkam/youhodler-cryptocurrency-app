import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getExtendedRatesQueryOptions } from "@/src/queries/useExtendedRatesSuspenseQuery/getExtendedRatesQueryOptions";
import { CryptoList } from "@/src/features/CryptocurrencyList/block/CryptoList/CryptoList.client";
import { isBotOnlyServer } from "@/src/common/utils/isBotOnlyServer";
import { getQueryClient } from "@/src/common/providers/QueryInitializeProvider/utils/getQueryClient";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(getExtendedRatesQueryOptions());

  const isBot = await isBotOnlyServer();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CryptoList isBot={isBot} />
    </HydrationBoundary>
  );
}
