import styles from "./CommonLayout.module.css";

/** Базовый темплейт для страниц */
export function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>header</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
