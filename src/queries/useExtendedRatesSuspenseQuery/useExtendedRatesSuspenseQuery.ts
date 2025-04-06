import { useSuspenseQuery } from "@tanstack/react-query";
import { getExtendedRatesQueryOptions } from "./getExtendedRatesQueryOptions";

export function useExtendedRatesSuspenseQuery() {
  return useSuspenseQuery({ ...getExtendedRatesQueryOptions() });
}
