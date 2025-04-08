"use client";

import { CustomCellRendererProps } from "ag-grid-react";
import styles from "./PercentageDifferenceCell.module.css";
import cn from "classnames";

/** Рост/падение в процентах */
export function PercentageDifferenceCell({ value }: CustomCellRendererProps) {
  return (
    <span
      className={cn(styles.root, {
        [styles.positive]: value > 0,
        [styles.negative]: value < 0,
      })}
    >
      {value} %
    </span>
  );
}
