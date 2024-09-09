import "./globals.scss";
import styles from './layout.module.scss'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <article className={styles.form}>
          <div className={styles.firstCollumn}>
            <h1 tabIndex={1}>Wt</h1>
          </div>
          <div className={styles.secondCollumn}>
            {children}
          </div>
        </article>
      </body>
    </html>
  );
}
