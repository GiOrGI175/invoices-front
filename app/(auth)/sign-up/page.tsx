'use client';

export default function page() {
  return (
    <div className='flex items-center w-full h-[100vh] '>
      <div className='m-auto sm:w-[74%]'>
        <div className=' md:w-[560px] min-w-[300px] md:m-auto rounded-xl bg-white h-[550px] p-8 gap-[32px] flex flex-col '>
          <h2 className='text-[32px] font-bold text-[#0c0e16]'>Sign Up</h2>
          <form
            className='space-y-4 md:space-y-6'
            //   onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Name
              </label>
              <input
                type='text'
                className='bg-gray-50 border border-[#98908B] text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
                placeholder='Enter Your Name ...'
                //   {...register('fullName')}
              />
              {/* {errors.fullName && (
                  <span style={{ color: 'red' }}>
                    {errors.fullName.message}
                  </span>
                )} */}
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='bg-gray-50 border border-[#98908B] text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Enter Your Email ...'
                required
                //   {...register('email')}
              />
              {/* {errors.email && (
                  <span style={{ color: 'red' }}>{errors.email.message}</span>
                )} */}
            </div>
            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                placeholder='••••••••'
                className='bg-gray-50 border border-[#98908B] text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
                //   {...register('password')}
              />
              {/* {errors.password && (
                  <span style={{ color: 'red' }}>
                    {errors.password.message}
                  </span>
                )} */}
            </div>
            {/* {errorMessage && <p className='text-red-600'>{errorMessage}</p>} */}

            <button
              type='submit'
              className='w-full text-white bg-[#7c5dfa] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
            >
              Create Account
            </button>
            <p className='text-sm font-light text-gray-500 dark:text-gray-400 text-center'>
              Already have an account?{' '}
              <a
                //   onClick={handleClick}
                className='font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer'
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
