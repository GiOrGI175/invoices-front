'use client';

import { useDarkMode } from '@/store/darkMode';
import { Controller, useFormContext } from 'react-hook-form';
import type { CreateInvoiceT } from '@/components/_organisms/form/CreateForm';
import OpenCalendar from '@/components/_atoms/form/OpenCalendar';
import OpenPaymentTrems from '@/components/_atoms/form/OpenPaymentTrems';

export default function BillTo() {
  const isDarkMode = useDarkMode((s) => s.isDarkMode);
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<CreateInvoiceT>();

  const baseInput =
    'w-full h-[48px] p-[20px] border rounded-[4px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] focus:outline-none focus:border-[#7C5DFA] transition-colors duration-1000';
  const tone = isDarkMode
    ? 'bg-[#1E2139] text-[#FFFFFF] border-[#252945]'
    : 'bg-transparent text-[#0C0E16] border-[#DFE3FA]';
  const labelTone = isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]';
  const errorTone = 'border-[#EC5757]';
  const Err = ({ msg }: { msg?: string }) =>
    msg ? <p className='mt-1 text-xs text-[#EC5757]'>{msg}</p> : null;

  return (
    <div className='sm:max-w-[504px] mt-[49px] w-full flex flex-col'>
      <span className='mb-[24px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7C5DFA]'>
        Bill To
      </span>
      {/* Client Name */}
      <div className='flex flex-col'>
        <label
          htmlFor='clientName'
          className={`mb-[9px] font-league font-medium text-[13px] ${labelTone}`}
        >
          Client’s Name
        </label>
        <input
          id='clientName'
          placeholder='Enter Client’s Name'
          className={`${baseInput} ${tone} ${
            errors.clientName ? errorTone : ''
          }`}
          {...register('clientName', { required: 'Name is required' })}
        />
        <Err msg={errors.clientName?.message} />
      </div>
      {/* Client Email */}
      <div className='flex flex-col mt-[25px]'>
        <label
          htmlFor='clientEmail'
          className={`mb-[9px] font-league font-medium text-[13px] ${labelTone}`}
        >
          Client’s Email
        </label>
        <input
          id='clientEmail'
          type='email'
          placeholder='Enter Client’s Email'
          className={`${baseInput} ${tone} ${
            errors.clientEmail ? errorTone : ''
          }`}
          {...register('clientEmail', {
            required: 'Email is required',
            pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' },
          })}
        />
        <Err msg={errors.clientEmail?.message} />
      </div>
      {/* Street */}
      <div className='flex flex-col mt-[25px]'>
        <label
          htmlFor='clientAddress.street'
          className={`mb-[9px] font-league font-medium text-[13px] ${labelTone}`}
        >
          Street Address
        </label>
        <input
          id='clientAddress.street'
          placeholder='Enter street address'
          className={`${baseInput} ${tone} ${
            errors.clientAddress?.street ? errorTone : ''
          }`}
          {...register('clientAddress.street', {
            required: 'Street is required',
          })}
        />
        <Err msg={errors.clientAddress?.street?.message} />
      </div>
      {/* City / Post Code / Country */}
      <div className='max-sm:w-full flex mt-[25px] gap-[24px]'>
        <div className='max-sm:w-full flex max-sm:flex-col gap-[24px]'>
          {/* City */}
          <div className='max-sm:w-full flex flex-col'>
            <label
              htmlFor='clientAddress.city'
              className={`mb-[9px] font-league font-medium text-[13px] ${labelTone}`}
            >
              City
            </label>
            <input
              id='clientAddress.city'
              placeholder='Enter city'
              className={`sm:max-w-[152px] ${baseInput} ${tone} ${
                errors.clientAddress?.city ? errorTone : ''
              }`}
              {...register('clientAddress.city', {
                required: 'City is required',
              })}
            />
            <Err msg={errors.clientAddress?.city?.message} />
          </div>

          {/* Post Code */}
          <div className='max-sm:w-full flex flex-col'>
            <label
              htmlFor='clientAddress.postCode'
              className={`mb-[9px] font-league font-medium text-[13px] ${labelTone}`}
            >
              Post Code
            </label>
            <input
              id='clientAddress.postCode'
              placeholder='Enter Post Code'
              className={`sm:max-w-[152px] ${baseInput} ${tone} ${
                errors.clientAddress?.postCode ? errorTone : ''
              }`}
              {...register('clientAddress.postCode', {
                required: 'Post code is required',
              })}
            />
            <Err msg={errors.clientAddress?.postCode?.message} />
          </div>

          {/* Country */}
          <div className='max-sm:w-full flex flex-col'>
            <label
              htmlFor='clientAddress.country'
              className={`mb-[9px] font-league font-medium text-[13px] ${labelTone}`}
            >
              Country
            </label>
            <input
              id='clientAddress.country'
              placeholder='Enter country'
              className={`sm:max-w-[152px] ${baseInput} ${tone} ${
                errors.clientAddress?.country ? errorTone : ''
              }`}
              {...register('clientAddress.country', {
                required: 'Country is required',
              })}
            />
            <Err msg={errors.clientAddress?.country?.message} />
          </div>
        </div>
      </div>
      <div className='flex max-sm:flex-col gap-[24px] mt-[25px] w-full'>
        <Controller
          control={control}
          name='createdAt'
          rules={{
            required: 'Date is required',
            validate: (v) => !Number.isNaN(Date.parse(v)) || 'Invalid date',
          }}
          render={({ field, fieldState }) => (
            <OpenCalendar
              value={field.value}
              onChange={(isoString: string) => field.onChange(isoString)}
              error={fieldState.error?.message}
              tone={{
                inputClass: `${baseInput} ${tone} ${
                  fieldState.error ? errorTone : ''
                }`,
                labelClass: labelTone,
              }}
            />
          )}
        />

        {/* Payment Terms → number (days) */}
        <Controller
          control={control}
          name='paymentTerms'
          rules={{
            required: 'Payment terms are required',
            min: { value: 0, message: 'Must be ≥ 0' },
          }}
          render={({ field, fieldState }) => (
            <OpenPaymentTrems
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />
      </div>

      {/* Description */}
      <div className='flex flex-col mt-[25px]'>
        <label
          htmlFor='description'
          className={`mb-[9px] font-league font-medium text-[13px] ${labelTone}`}
        >
          Project Description
        </label>
        <input
          id='description'
          placeholder='Enter description'
          className={`${baseInput} ${tone} ${
            errors.description ? errorTone : ''
          }`}
          {...register('description')}
        />
        <Err msg={errors.description?.message} />
      </div>
    </div>
  );
}
