'use client';

// import api from '@/lib/api';
import { ReactNode } from 'react';
import { useForm, UseFormRegister, FieldErrors } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useOpen } from '@/store/ui';

type RegisterInput = {
  fullName: string;
  email: string;
  password: string;
};

type RegisterChildrenProps = {
  register: UseFormRegister<RegisterInput>;
  errors: FieldErrors<RegisterInput> & { general?: string };
  isSubmitting: boolean;
};

type ChildrenRender = (ctx: RegisterChildrenProps) => ReactNode;

type RegisterProps = {
  children: ChildrenRender;
  onSuccess?: (data: any) => void;
  redirectTo?: string;
};

interface ApiErrorResponse {
  message: string;
  errors?: {
    fullName?: string[];
    email?: string[];
    password?: string[];
  };
}

export default function Register({ children }: RegisterProps) {
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
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: RegisterInput) => {
    try {
      setIsOverlay(true);
      setIsRegLoader(true);

      await axios.post('http://localhost:3005/auth/sign-up', data);

      reset();

      router.push('/sign-in');
    } catch (error: any) {
      console.error('რეგისტრაციის შეცდომა:', error);

      if (error.response?.data) {
        const apiError = error.response.data as ApiErrorResponse;

        if (apiError.errors) {
          if (apiError.errors.fullName) {
            setError('fullName', {
              type: 'server',
              message: apiError.errors.fullName[0],
            });
          }
          if (apiError.errors.email) {
            setError('email', {
              type: 'server',
              message: apiError.errors.email[0],
            });
          }
          if (apiError.errors.password) {
            setError('password', {
              type: 'server',
              message: apiError.errors.password[0],
            });
          }
        }

        setError('root', {
          type: 'server',
          message: apiError.message || 'დაფიქსირდა შეცდომა',
        });
      } else {
        setError('root', {
          type: 'server',
          message: error.message || 'სერვერთან კავშირი ვერ დამყარდა',
        });
      }
    } finally {
      setIsOverlay(false);
      setIsRegLoader(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {children({
        register,
        errors: {
          ...errors,
          general: errors.root?.message,
        },
        isSubmitting,
      })}
    </form>
  );
}
