"use client";

import { DetailsItemContainer } from "../DetailsItemContainer/DetailsItemContainer.client";
import { PriceListProps } from "./PriceList.types";
import styles from "./PriceList.module.css";
import cn from "classnames";
import { PriceWithCurrency } from "../PriceWithCurrency/PriceWithCurrency.client";
import { PercentageDifference } from "../PercentageDifference/PercentageDifference.client";

export function PriceList({
  rate,
  ask,
  bid,
  diff24hInPercent,
  className,
}: PriceListProps) {
  return (
    <div className={cn(styles.root, className)}>
      <DetailsItemContainer title="Price">
        <PriceWithCurrency price={rate} />
      </DetailsItemContainer>
      <DetailsItemContainer title="Ask">
        <PriceWithCurrency price={ask} />
      </DetailsItemContainer>
      <DetailsItemContainer title="Bid">
        <PriceWithCurrency price={bid} />
      </DetailsItemContainer>
      <DetailsItemContainer title="Change 24h">
        <PercentageDifference diff={diff24hInPercent} />
      </DetailsItemContainer>
    </div>
  );
}
