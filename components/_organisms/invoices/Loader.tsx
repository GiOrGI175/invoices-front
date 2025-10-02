'use client';
export default function Loader() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#7c5dfa] mx-auto'></div>
        <p className='mt-4 text-gray-600'>Loading...</p>
      </div>
    </div>
  );
}
