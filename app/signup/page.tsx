'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess('');
    setError('');

    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please complete all required fields.');
      return;
    }

    if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setSuccess('Account created successfully.');
  };

  return (
    <section className="min-h-screen bg-surface text-text flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-surface/95 p-10 shadow-soft backdrop-blur-xl">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-primary transition hover:text-primary/90">
            ← Back to home
          </Link>
        </div>
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Sign up</p>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Create your account</h1>
          <p className="mt-3 text-muted">Join SMARTRICH and start connecting global delivery with US opportunities.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-muted">Full name</span>
              <input
                type="text"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="John Doe"
                className="w-full rounded-3xl border border-border bg-surface px-5 py-4 text-base text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-muted">Company</span>
              <input
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="Acme Corp"
                className="w-full rounded-3xl border border-border bg-surface px-5 py-4 text-base text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
          </div>

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

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-muted">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Create a password"
                className="w-full rounded-3xl border border-border bg-surface px-5 py-4 text-base text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-muted">Confirm password</span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Confirm password"
                className="w-full rounded-3xl border border-border bg-surface px-5 py-4 text-base text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}
          {success && <p className="text-sm text-emerald-400">{success}</p>}

          <button
            type="submit"
            className="w-full rounded-3xl bg-primary px-6 py-4 text-base font-semibold text-white transition hover:bg-primary/90"
          >
            Create account
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-muted">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-primary hover:text-primary/80">
            Sign in
          </Link>
        </div>
      </div>
    </section>
  );
}
