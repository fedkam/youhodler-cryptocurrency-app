"use client";

import { CustomCellRendererProps } from "ag-grid-react";
import Link from "next/link";
import styles from "./NameCell.module.css";
import { cryptoDetailsRoute } from "@/src/routes/routes";

export function NameCell({ value }: CustomCellRendererProps) {
  return (
    <span>
      <Link
        href={cryptoDetailsRoute(value)}
        className={styles.seoLink}
        onClick={(e) => e.preventDefault()}
      >
        {value}
      </Link>
    </span>
  );
}
