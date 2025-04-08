"use client";

import Image from "next/image";
import styles from "./DetailsHeader.module.css";

export function DetailsHeader({
  name,
  fullName,
  imageUrl,
}: {
  name: string;
  fullName: string | null;
  imageUrl: string | null;
}) {
  return (
    <div className={styles.root}>
      {imageUrl && (
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt="Cryptocurrency logo"
        />
      )}
      <h1>{fullName ?? name}</h1>
    </div>
  );
}
