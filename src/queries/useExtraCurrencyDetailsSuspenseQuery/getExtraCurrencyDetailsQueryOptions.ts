import { getExtraCurrencyDetails } from "@/src/servises/getExtraCurrencyDetails/getExtraCurrencyDetails";
import { ExtraCurrencyDetailsParamsType } from "@/src/servises/getExtraCurrencyDetails/getExtraCurrencyDetails.types";
import { queryOptions } from "@tanstack/react-query";

const extraCurrencyDetailsQueryKey = "extraCurrencyDetails";

export function getExtraCurrencyDetailsQueryOptions(
  params: ExtraCurrencyDetailsParamsType
) {
  return queryOptions({
    queryKey: [extraCurrencyDetailsQueryKey, params],
    queryFn: () => getExtraCurrencyDetails(params),
  });
}
