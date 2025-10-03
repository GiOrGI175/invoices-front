'use client';

import { CreateInvoiceT } from '@/components/_organisms/form/CreateForm';
import { useDarkMode } from '@/store/darkMode';
import { useFormContext } from 'react-hook-form';

export default function BillFrom() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  const {
    register,
    formState: { errors },
  } = useFormContext<CreateInvoiceT>();

  const baseInput =
    'w-full h-[48px] p-[20px] border rounded-[4px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] focus:outline-none focus:border-[#7C5DFA] transition-colors duration-1000';

  const tone = isDarkMode
    ? 'bg-[#1E2139] text-white border-[#252945]'
    : 'bg-transparent text-[#0C0E16] border-[#DFE3FA]';

  const labelTone = isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]';

  const errorTone = 'border-[#EC5757]';

  return (
    <div className='sm:max-w-[504px] w-full flex flex-col'>
      <span className='mb-[24px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7C5DFA]'>
        Bill From
      </span>

      {/* Street */}
      <div className='flex flex-col'>
        <label
          htmlFor='senderAddress.street'
          className={`mb-[9px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${labelTone}`}
        >
          Street Address
        </label>
        <input
          id='senderAddress.street'
          placeholder='Enter street address'
          className={`${baseInput} ${tone} ${
            errors.senderAddress?.street ? errorTone : ''
          }`}
          {...register('senderAddress.street', {
            required: 'Street is required',
          })}
        />
        {errors.senderAddress?.street && (
          <p className='mt-1 text-xs text-[#EC5757]'>
            {errors.senderAddress.street.message}
          </p>
        )}
      </div>

      {/* City / Post Code / Country */}
      <div className='flex max-sm:flex-col mt-[25px] gap-[24px] h-fit'>
        <div className='flex gap-[24px] max-sm:flex-col'>
          {/* City */}
          <div className='max-sm:w-full flex flex-col'>
            <label
              htmlFor='senderAddress.city'
              className={`mb-[9px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${labelTone}`}
            >
              City
            </label>
            <input
              id='senderAddress.city'
              placeholder='Enter city'
              className={`sm:max-w-[152px] ${baseInput} ${tone} ${
                errors.senderAddress?.city ? errorTone : ''
              }`}
              {...register('senderAddress.city', {
                required: 'City is required',
              })}
            />
            {errors.senderAddress?.city && (
              <p className='mt-1 text-xs text-[#EC5757]'>
                {errors.senderAddress.city.message}
              </p>
            )}
          </div>

          {/* Post Code */}
          <div className='max-sm:w-full flex flex-col'>
            <label
              htmlFor='senderAddress.postCode'
              className={`mb-[9px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${labelTone}`}
            >
              Post Code
            </label>
            <input
              id='senderAddress.postCode'
              placeholder='Enter post code'
              className={`sm:max-w-[152px] ${baseInput} ${tone} ${
                errors.senderAddress?.postCode ? errorTone : ''
              }`}
              {...register('senderAddress.postCode', {
                required: 'Post code is required',
              })}
            />
            {errors.senderAddress?.postCode && (
              <p className='mt-1 text-xs text-[#EC5757]'>
                {errors.senderAddress.postCode.message}
              </p>
            )}
          </div>
        </div>

        {/* Country */}
        <div className='max-sm:w-full flex flex-col'>
          <label
            htmlFor='senderAddress.country'
            className={`mb-[9px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${labelTone}`}
          >
            Country
          </label>
          <input
            id='senderAddress.country'
            placeholder='Enter country'
            className={`sm:max-w-[152px] ${baseInput} ${tone} ${
              errors.senderAddress?.country ? errorTone : ''
            }`}
            {...register('senderAddress.country', {
              required: 'Country is required',
            })}
          />
          {errors.senderAddress?.country && (
            <p className='mt-1 text-xs text-[#EC5757]'>
              {errors.senderAddress.country.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
