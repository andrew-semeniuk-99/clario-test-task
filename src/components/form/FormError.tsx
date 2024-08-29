'use client';

import { FC } from 'react';

import { cn } from '@/lib/utils';

interface IErrorMessageProps {
  isTouchedField: boolean;
  isSubmittedField: boolean;
  activeErrorKeys: string[];
  validationList: { key: string; message: string; isHiddenInitial?: boolean }[];

  className?: string;
}

const FormError: FC<IErrorMessageProps> = ({
  validationList,
  activeErrorKeys,
  isTouchedField,
  isSubmittedField,
  className,
}) => {
  const renderData = validationList
    .map((validationItem) => ({
      ...validationItem,
      isActiveError: activeErrorKeys.includes(validationItem.key),
    }))
    .filter(({ isActiveError, isHiddenInitial }) => (isSubmittedField && isActiveError) || !isHiddenInitial);

  if (!renderData.length) {
    return null;
  }

  return (
    <div className={cn('space-y-2 text-secondary-validation font-medium leading-none', className)}>
      {renderData.map(({ key, message, isActiveError }) => (
        <p
          key={key}
          className={cn({
            'text-danger': isSubmittedField && isActiveError,
            'text-success': isTouchedField && !isActiveError,
          })}
        >
          {message}
        </p>
      ))}
    </div>
  );
};

export default FormError;
