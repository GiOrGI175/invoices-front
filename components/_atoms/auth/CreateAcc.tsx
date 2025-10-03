'use client';

import { Loader2 } from 'lucide-react';

type CreateAccPropsT = {
  isSubmitting: boolean;
};

export default function CreateAcc({ isSubmitting }: CreateAccPropsT) {
  return (
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
  );
}
