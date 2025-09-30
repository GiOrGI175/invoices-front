'use client';

import { useState } from 'react';
import Link from 'next/link';
import Register from '@/components/_atoms/auth/register';

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    general?: string;
  }>({});

  return (
    <main className='flex items-center w-full min-h-[100dvh] bg-[#F8F8FB]'>
      <div className='m-auto sm:w-[74%] px-4'>
        <div className='md:w-[560px] min-w-[300px] md:m-auto rounded-xl bg-white min-h-[550px] p-8 gap-8 flex flex-col shadow-2xl'>
          <h1 className='text-[32px] font-bold text-[#0c0e16]'>Sign Up</h1>

          <Register
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            setErrors={setErrors}
          >
            <div className='space-y-4 md:space-y-6'>
              {errors.general && (
                <p className='text-sm text-red-600'>{errors.general}</p>
              )}

              {/* name */}
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Enter your name…'
                  autoComplete='name'
                  aria-invalid={!!errors.name}
                  className='bg-gray-50 border border-[#98908B] text-gray-900 rounded-lg focus:ring-[#7c5dfa] focus:border-[#7c5dfa] block w-full p-2.5'
                  required
                  minLength={2}
                />
                {errors.name && (
                  <span className='mt-1 block text-sm text-red-600'>
                    {errors.name}
                  </span>
                )}
              </div>

              {/* email */}
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Enter your email…'
                  autoComplete='email'
                  aria-invalid={!!errors.email}
                  className='bg-gray-50 border border-[#98908B] text-gray-900 rounded-lg focus:ring-[#7c5dfa] focus:border-[#7c5dfa] block w-full p-2.5'
                  required
                />
                {errors.email && (
                  <span className='mt-1 block text-sm text-red-600'>
                    {errors.email}
                  </span>
                )}
              </div>

              {/* password */}
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Password
                </label>
                <div className='relative'>
                  <input
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='••••••••'
                    autoComplete='new-password'
                    aria-invalid={!!errors.password}
                    className='bg-gray-50 border border-[#98908B] text-gray-900 rounded-lg focus:ring-[#7c5dfa] focus:border-[#7c5dfa] block w-full p-2.5 pr-24'
                    required
                    minLength={6}
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword((s) => !s)}
                    className='absolute inset-y-0 right-2 my-auto text-sm cursor-pointer'
                    aria-pressed={showPassword}
                  >
                    <span className='font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px]'>
                      {showPassword ? 'Hide' : 'Show'}
                    </span>
                  </button>
                </div>
                {errors.password && (
                  <span className='mt-1 block text-sm text-red-600'>
                    {errors.password}
                  </span>
                )}
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full text-white bg-[#7c5dfa] hover:bg-[#9277FF] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 disabled:opacity-60 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Creating…' : 'Create Account'}
              </button>

              <p className='text-sm font-light text-gray-500 text-center'>
                Already have an account?{' '}
                <Link
                  href='/login'
                  className='font-medium text-[#7c5dfa] hover:underline'
                >
                  Login
                </Link>
              </p>
            </div>
          </Register>
        </div>
      </div>
    </main>
  );
}
