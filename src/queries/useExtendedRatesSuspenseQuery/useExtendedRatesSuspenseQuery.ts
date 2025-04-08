import { useSuspenseQuery } from "@tanstack/react-query";
import { getExtendedRatesQueryOptions } from "./getExtendedRatesQueryOptions";

const DEFAULT_CURRENCY = "usd";

export function useExtendedRatesSuspenseQuery({
  currency = DEFAULT_CURRENCY,
}: {
  currency: string;
  currentCoin?: string;
}) {
  return useSuspenseQuery({
    ...getExtendedRatesQueryOptions(),
    select: (data) => data[currency],
  });
}
