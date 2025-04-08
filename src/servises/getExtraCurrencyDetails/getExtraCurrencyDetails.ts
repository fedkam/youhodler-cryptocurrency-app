import { MINI_CRYPTOCOMPARE_FREE_API } from "../api";
import {
  ExtraCurrencyDetailsParamsType,
  ExtraCurrencyDetailsSchema,
} from "./getExtraCurrencyDetails.types";

export async function getExtraCurrencyDetails({
  currency,
}: ExtraCurrencyDetailsParamsType) {
  const coingeckoUrl = new URL(
    `${MINI_CRYPTOCOMPARE_FREE_API}/data/all/coinlist`
  );
  coingeckoUrl.searchParams.set("fsym", currency);

  const response = await fetch(coingeckoUrl);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to fetch extended rates: ${response.status}`);
  }

  // Не могу обеспечить точную типизацию
  const parsedData = ExtraCurrencyDetailsSchema.parse(data);

  return parsedData;
}
