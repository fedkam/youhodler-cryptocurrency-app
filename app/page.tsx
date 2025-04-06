import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import styles from "./page.module.css";
import { getExtendedRatesQueryOptions } from "@/src/queries/useExtendedRatesSuspenseQuery/getExtendedRatesQueryOptions";
import { CryptoList } from "@/src/features/CryptocurrencyList/block/CryptoList/CryptoList";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getExtendedRatesQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={styles.page}>
        <main className={styles.main}>
          <CryptoList />
        </main>
        <footer className={styles.footer}>footer</footer>
      </div>
    </HydrationBoundary>
  );
}
