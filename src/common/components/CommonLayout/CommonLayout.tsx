import Link from "next/link";
import styles from "./CommonLayout.module.css";
import Image from "next/image";

// NOTE: Накидал просто для визуала, чтобы не было пустой страницы

/** Базовый темплейт для страниц */
export function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Image src="/vercel.svg" alt="Logo" width={32} height={32} />
        <Image
          src="/user.jpg"
          alt="Photo"
          width={48}
          height={48}
          className={styles.userImage}
        />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>Copyright © 2000 - 2025 CBN. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <Link href="#" target="_blank">
            Privacy Policy
          </Link>
          <Link href="#" target="_blank">
            Terms Of Use
          </Link>
        </div>
      </footer>
    </div>
  );
}
