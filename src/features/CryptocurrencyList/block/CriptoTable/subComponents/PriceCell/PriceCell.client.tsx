"use client";

import { CustomCellRendererProps } from "ag-grid-react";
import styles from "./PriceCell.module.css";

export function PriceCell({ value }: CustomCellRendererProps) {
  return <span className={styles.root}>{value}</span>;
}
