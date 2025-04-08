import { round } from "lodash";

/** Переводит diff24h в проценты */
export function convertDiff24hToPercentage({
  rate,
  diff24h,
}: {
  rate: number;
  diff24h: number;
}) {
  if (Math.abs(rate - diff24h) < 1e-10) {
    return 0;
  }

  return round((diff24h / (rate - diff24h)) * 100, 2);
}
