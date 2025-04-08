import { WithClassName } from "@/src/common/types/WithClassName";

export type PriceListProps = WithClassName<{
  rate: number;
  ask: number;
  bid: number;
  diff24hInPercent: number;
}>;
