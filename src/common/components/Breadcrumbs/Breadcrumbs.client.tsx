"use client";

import Link from "next/link";
import styles from "./Breadcrumbs.module.css";
import { useBreadcrumbsPaths } from "./hooks/useBreadcrumbsPaths";

export const Breadcrumbs = () => {
  const items = useBreadcrumbsPaths();
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {index < items.length - 1 ? (
              <>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
                <span className={styles.separator}>/</span>
              </>
            ) : (
              <span aria-current="page" className={styles.current}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
