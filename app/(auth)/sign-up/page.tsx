'use client';

import { useState } from 'react';
import Link from 'next/link';
import Register from '@/components/_atoms/auth/Register';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className='flex items-center w-full min-h-[100dvh] bg-[#F8F8FB]'>
      <div className='m-auto sm:w-[74%] px-4'>
        <div className='md:w-[560px] min-w-[300px] md:m-auto rounded-xl bg-white min-h-[550px] p-8 gap-8 flex flex-col shadow-2xl'>
          <div>
            <h1 className='text-[32px] font-bold text-[#0c0e16]'>Sign Up</h1>
            <p className='text-sm text-gray-500 mt-2'>
              Create your account to get started
            </p>
          </div>

          <Register>
            {({ register, errors, isSubmitting }) => (
              <div className='space-y-4 md:space-y-6'>
                {errors.general && (
                  <div className='p-4 bg-red-50 border border-red-200 rounded-lg'>
                    <p className='text-sm text-red-600'>{errors.general}</p>
                  </div>
                )}

                <div>
                  <label
                    htmlFor='name'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Name <span className='text-red-500'>*</span>
                  </label>
                  <input
                    id='fullName'
                    type='text'
                    placeholder='Enter your fullName...'
                    autoComplete='fullName'
                    aria-invalid={!!errors.fullName}
                    className={`bg-gray-50 border text-gray-900 rounded-lg focus:ring-2 focus:ring-[#7c5dfa] focus:border-[#7c5dfa] block w-full p-2.5 transition-colors ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                        : 'border-[#98908B]'
                    }`}
                    {...register('fullName', {
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                      maxLength: {
                        value: 50,
                        message: 'Name must be less than 50 characters',
                      },
                    })}
                  />
                  {errors.fullName && (
                    <span className='mt-1 flex items-center gap-1 text-sm text-red-600'>
                      <span className='text-red-500'>⚠</span>
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Email <span className='text-red-500'>*</span>
                  </label>
                  <input
                    id='email'
                    type='email'
                    placeholder='example@email.com'
                    autoComplete='email'
                    aria-invalid={!!errors.email}
                    className={`bg-gray-50 border text-gray-900 rounded-lg focus:ring-2 focus:ring-[#7c5dfa] focus:border-[#7c5dfa] block w-full p-2.5 transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                        : 'border-[#98908B]'
                    }`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <span className='mt-1 flex items-center gap-1 text-sm text-red-600'>
                      <span className='text-red-500'>⚠</span>
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Password <span className='text-red-500'>*</span>
                  </label>
                  <div className='relative'>
                    <input
                      id='password'
                      type={showPassword ? 'text' : 'password'}
                      placeholder='••••••••'
                      autoComplete='new-password'
                      aria-invalid={!!errors.password}
                      className={`bg-gray-50 border text-gray-900 rounded-lg focus:ring-2 focus:ring-[#7c5dfa] focus:border-[#7c5dfa] block w-full p-2.5 pr-12 transition-colors ${
                        errors.password
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'border-[#98908B]'
                      }`}
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters',
                        },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                          message:
                            'Password must contain uppercase, lowercase, and number',
                        },
                      })}
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword((s) => !s)}
                      className='absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors'
                      aria-label={
                        showPassword ? 'Hide password' : 'Show password'
                      }
                    >
                      {showPassword ? (
                        <EyeOff className='w-5 h-5' />
                      ) : (
                        <Eye className='w-5 h-5' />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <span className='mt-1 flex items-center gap-1 text-sm text-red-600'>
                      <span className='text-red-500'>⚠</span>
                      {errors.password.message}
                    </span>
                  )}
                  <p className='mt-1 text-xs text-gray-500'>
                    Must contain at least 8 characters, uppercase, lowercase,
                    and number
                  </p>
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full text-white bg-[#7c5dfa] hover:bg-[#9277FF] focus:ring-4 focus:outline-none focus:ring-[#7c5dfa]/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className='w-4 h-4 animate-spin' />
                      Creating Account…
                    </>
                  ) : (
                    'Create Account'
                  )}
                </button>

                <p className='text-sm font-light text-gray-500 text-center'>
                  Already have an account?{' '}
                  <Link
                    href='/sign-in'
                    className='font-medium text-[#7c5dfa] hover:underline'
                  >
                    Login here
                  </Link>
                </p>
              </div>
            )}
          </Register>
        </div>
      </div>
    </main>
  );
}
