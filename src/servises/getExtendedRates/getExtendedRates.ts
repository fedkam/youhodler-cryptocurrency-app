import { YOUHOLDER_API } from "../api";
import { RatesSchema } from "./getExtendedRates.types";

export async function getExtendedRates() {
  const response = await fetch(`${YOUHOLDER_API}/api/v3/rates/extended`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to fetch extended rates: ${response.status}`);
  }

  const parsedData = RatesSchema.parse(data);

  return parsedData;
}
