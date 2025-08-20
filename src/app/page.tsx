import { redirect } from 'next/navigation';

export default function RootPage() {
  // This will be handled by vercel.json routing
  redirect('/en');
}
