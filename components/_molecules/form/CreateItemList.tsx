'use client';

import { useDarkMode } from '@/store/darkMode';
import { useFormContext, useFieldArray } from 'react-hook-form';
import type { CreateInvoiceT } from '@/components/_organisms/form/CreateForm';
import AddNewItem from '@/components/_atoms/form/AddNewItem';
import ItemDelete from '@/components/_atoms/form/ItemDelete';

export default function CreateItemList() {
  const isDarkMode = useDarkMode((s) => s.isDarkMode);

  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext<CreateInvoiceT>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const items = watch('items') ?? [];

  const lineTotal = (i: number) => {
    const q = Math.max(0, Number(items?.[i]?.quantity || 0));
    const p = Math.max(0, Number(items?.[i]?.price || 0));
    return q * p;
  };

  const labelTone = isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]';
  const inputTone = isDarkMode
    ? 'bg-[#1E2139] text-white border-[#252945]'
    : 'bg-transparent text-[#0C0E16] border-[#DFE3FA]';
  const baseInput =
    'h-[48px] p-[12px] border rounded-[4px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] focus:outline-none focus:border-[#7C5DFA] transition-colors duration-1000';
  const errorBorder = 'border-[#EC5757]';

  return (
    <div className='mt-[35px] max-sm:mb-[22px] sm:mb-[12px]'>
      <span className='font-league font-bold text-[18px] leading-[32px] tracking-[-0.1px] text-[#777F98]'>
        Item List
      </span>

      {/* Header (desktop) — ვაჩვენოთ მხოლოდ მაშინ, როცა item-ები არსებობს */}
      {fields.length > 0 && (
        <div className='w-full hidden sm:flex gap-[16px] mt-2'>
          <span
            className={`max-w-[214px] w-full mb-[15px] font-league font-medium text-[13px] ${labelTone}`}
          >
            Item Name
          </span>
          <span
            className={`max-w-[46px] w-full mb-[15px] font-league font-medium text-[13px] ${labelTone}`}
          >
            Qty.
          </span>
          <span
            className={`max-w-[100px] w-full mb-[15px] font-league font-medium text-[13px] ${labelTone}`}
          >
            Price
          </span>
          <span
            className={`max-w-[100px] w-full mb-[15px] font-league font-medium text-[13px] ${labelTone}`}
          >
            Total
          </span>
        </div>
      )}

      {fields.map((field, idx) => {
        const nameErr = errors.items?.[idx]?.name?.message as
          | string
          | undefined;
        const qtyErr = errors.items?.[idx]?.quantity?.message as
          | string
          | undefined;
        const priceErr = errors.items?.[idx]?.price?.message as
          | string
          | undefined;

        return (
          <div key={field.id} className='flex max-sm:flex-col gap-[16px]'>
            {/* Item Name */}
            <div className='flex flex-col sm:max-w-[214px] w-full'>
              <label
                className={`flex sm:hidden mb-[9px] font-league font-medium text-[13px] ${labelTone}`}
              >
                Item Name
              </label>
              <input
                placeholder='e.g., Banner design'
                className={`${baseInput} ${inputTone} ${
                  nameErr ? errorBorder : ''
                }`}
                {...register(`items.${idx}.name`, {
                  required: 'Name is required',
                })}
              />
              {nameErr && (
                <p className='text-xs text-[#EC5757] mt-1'>{nameErr}</p>
              )}
            </div>

            <div className='max-sm:w-full flex max-sm:justify-between gap-[16px]'>
              {/* Qty */}
              <div className='flex flex-col'>
                <label
                  className={`flex sm:hidden mb-[9px] font-league font-medium text-[13px] ${labelTone}`}
                >
                  Qty.
                </label>
                <input
                  type='number'
                  min={1}
                  className={`sm:max-w-[46px] max-sm:min-w-[64px] w-full ${baseInput} ${inputTone} ${
                    qtyErr ? errorBorder : ''
                  } appearance-none [-moz-appearance:textfield]`}
                  {...register(`items.${idx}.quantity`, {
                    valueAsNumber: true,
                    required: 'Qty required',
                    min: { value: 1, message: 'Min 1' },
                  })}
                />
                {qtyErr && (
                  <p className='text-xs text-[#EC5757] mt-1'>{qtyErr}</p>
                )}
              </div>

              {/* Price */}
              <div className='flex flex-col'>
                <label
                  className={`flex sm:hidden mb-[9px] font-league font-medium text-[13px] ${labelTone}`}
                >
                  Price
                </label>
                <input
                  type='number'
                  min={0}
                  step='0.01'
                  className={`sm:max-w-[100px] max-sm:min-w-[80px] w-full ${baseInput} ${inputTone} ${
                    priceErr ? errorBorder : ''
                  } appearance-none [-moz-appearance:textfield]`}
                  {...register(`items.${idx}.price`, {
                    valueAsNumber: true,
                    required: 'Price required',
                    min: { value: 0, message: 'Min 0' },
                  })}
                />
                {priceErr && (
                  <p className='text-xs text-[#EC5757] mt-1'>{priceErr}</p>
                )}
              </div>

              {/* Total (derived only UI) */}
              <div className='flex flex-col'>
                <div className='max-w-[100px] w-full sm:h-[48px] max-sm:h-[78px] flex max-sm:flex-col items-center'>
                  <label
                    className={`flex sm:hidden mb-[9px] font-league font-medium text-[13px] ${labelTone}`}
                  >
                    Total
                  </label>
                  <span
                    className={`h-full max-sm:min-w-[80px] flex items-center font-league font-bold text-[15px] tracking-[-0.25px] ${
                      isDarkMode ? 'text-[#DFE3FA]' : 'text-[#888EB0]'
                    }`}
                  >
                    {lineTotal(idx).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>

              {/* Delete */}
              <ItemDelete onClick={() => remove(idx)} />
            </div>
          </div>
        );
      })}

      {/* Footer: Add item + Subtotal */}
      <div className='w-full h-[48px] mt-[18px] mb-[16px] flex justify-between items-center'>
        <AddNewItem
          onClick={() => append({ name: '', quantity: 1, price: 0 })}
        />
      </div>
    </div>
  );
}
