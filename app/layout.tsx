import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '../components/Footer';
import { ConditionalHeader } from '../components/ConditionalHeader';
import { ThemeProvider } from '../components/ThemeProvider';

export const metadata: Metadata = {
  title: 'SMARTRICH — Software Delivery and Global Execution',
  description: 'SMARTRICH connects US software opportunities with global engineering teams through operator-led execution.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-surface text-slate-950 antialiased">
        <ThemeProvider>
          <ConditionalHeader />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
