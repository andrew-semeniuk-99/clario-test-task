'use client';

import { FC, useState } from 'react';

import FormInput, { IFormInputProps } from '@/components/form/FormInput';
import { forwardRef } from '@nextui-org/react';
import { EyeFilledIcon, EyeSlashFilledIcon } from '@nextui-org/shared-icons';

const FormInputPassword: FC<IFormInputProps> = forwardRef(({ type, ...props }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const onToggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <FormInput
      ref={ref}
      {...props}
      type={isVisible ? 'text' : 'password'}
      endContent={
        <button type='button' className='focus:outline-none' onClick={onToggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className='text-xl text-placeholder' />
          ) : (
            <EyeFilledIcon className='text-xl text-placeholder' />
          )}
        </button>
      }
    />
  );
});

export default FormInputPassword;
