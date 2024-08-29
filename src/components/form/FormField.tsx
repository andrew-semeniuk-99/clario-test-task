'use client';

import { FC, ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface IFormFieldProps {
  input?: ReactNode;
  error?: ReactNode;
  className?: string;
}

const FormField: FC<IFormFieldProps> = ({ input, error, className }) => {
  return (
    <div className={cn('mb-5 space-y-6', className)}>
      <div>{input}</div>

      <div className='px-3.5'>{error}</div>
    </div>
  );
};

export default FormField;
