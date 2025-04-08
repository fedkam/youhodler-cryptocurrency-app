"use client";

import styles from "./DetailsDescription.module.css";

export function DetailsDescription({ children }: { children: string | null }) {
  if (!children) {
    return null;
  }
  return <p className={styles.root}>{children}</p>;
}
