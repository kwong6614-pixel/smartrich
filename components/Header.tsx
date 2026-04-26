import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

import Image from 'next/image';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Team', href: '#team' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur-xl shadow-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#home" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="SMARTRICH logo" width={36} height={36} priority />
          <span className="text-xl font-bold text-primary">SMARTRICH</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/login"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/5"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/5"
          >
            Sign Up
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
