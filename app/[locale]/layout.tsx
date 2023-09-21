import { type ReactNode } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

type Props = {
  children: ReactNode;
};

export default async function Layout({ children }: Props) {
  return (
    <html>
      {/* It seems important to have some css here */}
      <body className={styles.Body}>
        <div>
          <Link href="/en/red" prefetch={false}>
            Red
          </Link>
        </div>
        <div>
          <Link href="/en/blue" prefetch={false}>
            Blue
          </Link>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}

export const metadata = {
  title: '😔',
};
