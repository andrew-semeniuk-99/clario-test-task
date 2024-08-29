'use client';

import { FC } from 'react';

import { cn } from '@/lib/utils';
import { forwardRef, Input, InputProps } from '@nextui-org/react';

export interface IFormInputProps extends InputProps {
  isValid?: boolean;
}

const FormInput: FC<IFormInputProps> = forwardRef(({ isValid, isInvalid, classNames, ...props }, ref) => (
  <Input
    // @ts-ignore muted 'warning' about a lot of props related to {...props}
    ref={ref}
    radius='sm'
    size='lg'
    variant='bordered'
    isInvalid={isInvalid}
    {...props}
    classNames={{
      input: cn(
        'text-main-text placeholder:text-placeholder group-focus-within:text-main-text',
        isValid && 'text-success',
      ),
      inputWrapper: cn(
        'border-white bg-white px-[20px] shadow-none group-focus-within:!border-placeholder',
        isValid && 'border-success',
        isInvalid && '!border-danger group-focus-within:!border-danger',
      ),
      ...classNames,
    }}
  />
));

export default FormInput;
