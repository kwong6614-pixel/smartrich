'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess('');
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // setSuccess('Logged in successfully.');
  };

  return (
    <section className="min-h-screen bg-surface text-text flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-surface/95 p-10 shadow-soft backdrop-blur-xl">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-primary transition hover:text-primary/90">
            ← Back to home
          </Link>
        </div>
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Login</p>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Access your account</h1>
          <p className="mt-3 text-muted">Enter your credentials to continue and manage your opportunities.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-muted">Email address</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-3xl border border-border bg-surface px-5 py-4 text-base text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-muted">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-3xl border border-border bg-surface px-5 py-4 text-base text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <div className="flex items-center justify-between text-sm text-muted">
            <div className="flex items-center gap-2">
              <input id="remember" type="checkbox" className="h-4 w-4 rounded border-border bg-surface text-primary focus:ring-primary" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link href="#" className="font-semibold text-primary hover:text-primary/80">
              Forgot password?
            </Link>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}
          {success && <p className="text-sm text-emerald-400">{success}</p>}

          <button
            type="submit"
            className="w-full rounded-3xl bg-primary px-6 py-4 text-base font-semibold text-white transition hover:bg-primary/90"
          >
            Sign in
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-muted">
          New here?{' '}
          <Link href="/signup" className="font-semibold text-primary hover:text-primary/80">
            Create an account
          </Link>
        </div>
      </div>
    </section>
  );
}
