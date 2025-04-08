"use client";

import styles from "./PercentageDifference.module.css";
import cn from "classnames";

/** Рост/падение в процентах */
export function PercentageDifference({ diff }: { diff: number }) {
  return (
    <span
      className={cn(styles.root, {
        [styles.positive]: diff > 0,
        [styles.negative]: diff < 0,
      })}
    >
      {diff} %
    </span>
  );
}
