'use client';

import { PropsWithChildren } from 'react';

type Errors = {
  name?: string;
  email?: string;
  password?: string;
  general?: string;
};

type RegisterPropsT = PropsWithChildren<{
  isSubmitting: boolean;
  setIsSubmitting: (v: boolean) => void;
  setErrors: (e: Errors) => void;
}>;

export default function Register({
  isSubmitting,
  setIsSubmitting,
  setErrors,
  children,
}: RegisterPropsT) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    const form = new FormData(e.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const password = String(form.get('password') || '');

    const nextErrors: Errors = {};
    if (name.length < 2)
      nextErrors.name = 'Name must be at least 2 characters.';
    if (!/^\S+@\S+\.\S+$/.test(email))
      nextErrors.email = 'Please enter a valid email.';
    if (password.length < 6)
      nextErrors.password = 'Password must be at least 6 characters.';

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // const res = await fetch('/api/auth/signup', { method: 'POST', body: JSON.stringify({ name, email, password }) });
      // if (!res.ok) throw new Error('Failed to create account');
      await new Promise((r) => setTimeout(r, 800));
      alert('Account created!');
    } catch (err: any) {
      setErrors({ general: err?.message || 'Something went wrong.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {children}
    </form>
  );
}
