"use client";

import { DetailsItemContainer } from "../DetailsItemContainer/DetailsItemContainer.client";
import { PriceListProps } from "./PriceList.types";
import styles from "./PriceList.module.css";
import cn from "classnames";

export function PriceList({
  rate,
  ask,
  bid,
  diff24h,
  className,
}: PriceListProps) {
  return (
    <div className={cn(styles.root, className)}>
      <DetailsItemContainer title="Price">
        <p>{rate}</p>
      </DetailsItemContainer>
      <DetailsItemContainer title="Ask">
        <p>{ask}</p>
      </DetailsItemContainer>
      <DetailsItemContainer title="Bid">
        <p>{bid}</p>
      </DetailsItemContainer>
      <DetailsItemContainer title="Change 24h">
        <p>{diff24h}</p>
      </DetailsItemContainer>
    </div>
  );
}
