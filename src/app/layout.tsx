import '@/styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Broadway Corporation',
  description: 'Broadway Corporation Web Platform',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
