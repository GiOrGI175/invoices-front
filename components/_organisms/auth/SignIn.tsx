'use client';

import { useOpen } from '@/store/ui';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import Cookies from 'js-cookie';

type RegisterInput = {
  email: string;
  password: string;
};

interface ApiErrorResponse {
  message: string;
  errors?: {
    email?: string[];
    password?: string[];
  };
}

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const setIsOverlay = useOpen((state) => state.setIsOverlay);
  const setIsRegLoader = useOpen((state) => state.setIsRegLoader);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    mode: 'onBlur',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: RegisterInput) => {
    try {
      setIsOverlay(true);
      setIsRegLoader(true);

      const res = await axios.post('http://localhost:3005/auth/sign-in', data);
      const token = res.data?.accesToken;

      console.log(token);

      if (token) {
        Cookies.set('auth_token', token, {
          expires: 1,
          secure: false,
          sameSite: 'Lax',
          path: '/',
        });
      }

      reset();
      router.push('/');
    } catch (err: unknown) {
      if (axios.isAxiosError<ApiErrorResponse>(err)) {
        const apiError = err.response?.data;

        if (apiError?.errors?.email?.[0]) {
          setError('email', {
            type: 'server',
            message: apiError.errors.email[0],
          });
        }
        if (apiError?.errors?.password?.[0]) {
          setError('password', {
            type: 'server',
            message: apiError.errors.password[0],
          });
        }

        setError('root', {
          type: 'server',
          message: apiError?.message ?? 'დაფიქსირდა შეცდომა',
        });
      } else {
        const msg =
          err instanceof Error ? err.message : 'სერვერთან კავშირი ვერ დამყარდა';
        setError('root', { type: 'server', message: msg });
      }
    } finally {
      setIsOverlay(false);
      setIsRegLoader(false);
    }
  };

  return (
    <div className='md:w-[560px] min-w-[300px] md:m-auto rounded-xl bg-white min-h-[550px] p-8 gap-8 flex flex-col shadow-2xl'>
      <div>
        <h1 className='text-[32px] font-bold text-[#0c0e16]'>Login</h1>
        <p className='text-sm text-gray-500 mt-2'>
          Welcome back — sign in to continue
        </p>
      </div>

      {errors.root?.message && (
        <div className='p-4 bg-red-50 border border-red-200 rounded-lg'>
          <p className='text-sm text-red-600'>{errors.root.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='space-y-4 md:space-y-6'>
          {/* Email */}
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
            {errors.email?.message && (
              <span className='mt-1 flex items-center gap-1 text-sm text-red-600'>
                <span className='text-red-500'>⚠</span>
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
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
                autoComplete='current-password'
                aria-invalid={!!errors.password}
                className={`bg-gray-50 border text-gray-900 rounded-lg focus:ring-2 focus:ring-[#7c5dfa] focus:border-[#7c5dfa] block w-full p-2.5 pr-12 transition-colors ${
                  errors.password
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'border-[#98908B]'
                }`}
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Minimum 6 characters' },
                })}
              />
              <button
                type='button'
                onClick={() => setShowPassword((s) => !s)}
                className='absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors'
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className='w-5 h-5' />
                ) : (
                  <Eye className='w-5 h-5' />
                )}
              </button>
            </div>
            {errors.password?.message && (
              <span className='mt-1 flex items-center gap-1 text-sm text-red-600'>
                <span className='text-red-500'>⚠</span>
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full text-white bg-[#7c5dfa] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#9277FF] duration-500 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'
          >
            {isSubmitting ? 'Processing…' : 'Login'}
          </button>

          {/* Footer link */}
          <p className='text-sm font-light text-gray-500 text-center'>
            Need to create an account?{' '}
            <Link
              href='/sign-up'
              className='font-medium text-[#7c5dfa] hover:underline'
            >
              Sign up here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
