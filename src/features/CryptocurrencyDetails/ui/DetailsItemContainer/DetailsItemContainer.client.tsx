"use client";

import styles from "./DetailsItemContainer.module.css";
import { DetailsItemContainerProps } from "./DetailsItemContainer.types";

export function DetailsItemContainer({
  title,
  children,
}: DetailsItemContainerProps) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
