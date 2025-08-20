import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to default locale using next-intl's routing
  redirect('/en');
}
