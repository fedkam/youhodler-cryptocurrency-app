import { useSuspenseQuery } from "@tanstack/react-query";
import { getExtraCurrencyDetailsQueryOptions } from "./getExtraCurrencyDetailsQueryOptions";
import { ExtraCurrencyDetailsParamsType } from "@/src/servises/getExtraCurrencyDetails/getExtraCurrencyDetails.types";
import { prepareFullImageUrl } from "./utils/prepareFullImageUrl";

export function useExtraCurrencyDetailsSuspenseQuery(
  params: ExtraCurrencyDetailsParamsType
) {
  const currencyUpperCase = params.currency.toUpperCase();
  return useSuspenseQuery({
    ...getExtraCurrencyDetailsQueryOptions(params),
    select: (data) => ({
      fullName: data.Data?.[currencyUpperCase]?.FullName || null,
      imageUrl: prepareFullImageUrl(data.Data?.[currencyUpperCase]?.ImageUrl),
      description: data.Data?.[currencyUpperCase]?.Description || null,
    }),
  });
}
