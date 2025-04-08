"use client";

import Image from "next/image";
import styles from "./DetailsHeader.module.css";

export function DetailsHeader({
  name,
  fullName,
  imageUrl,
  description,
}: {
  name: string;
  fullName: string | null;
  imageUrl: string | null;
  description: string | null;
}) {
  return (
    <div className={styles.root}>
      <div className={styles.firstLine}>
        {imageUrl && (
          <Image
            src={imageUrl}
            width={100}
            height={100}
            alt="Cryptocurrency logo"
          />
        )}
        <h1 className={styles.title}>{fullName ?? name}</h1>
      </div>
      <p className={styles.subTitle}>{description}</p>
    </div>
  );
}
