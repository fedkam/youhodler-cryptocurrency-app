import { CRYPTOCOMPARE_FREE_API } from "@/src/servises/api";

export function prepareFullImageUrl(
  imageUrl: string | undefined,
  api: string = CRYPTOCOMPARE_FREE_API
) {
  if (!imageUrl) return null;

  return `${api}${imageUrl}`;
}
