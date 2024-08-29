'use client';

import { useForm } from 'react-hook-form';

import { useTranslations } from 'next-intl';

import FormError from '@/components/form/FormError';
import FormField from '@/components/form/FormField';
import FormInput from '@/components/form/FormInput';
import FormInputPassword from '@/components/form/FormInputPassword';
import getValidationSchema from '@/ui/sign-in/validation/schema';
import { Button } from '@nextui-org/react';

const SignUp = () => {
  const t = useTranslations();

  const validationSchema = getValidationSchema(t);

  const form = useForm({ mode: 'all', criteriaMode: 'all', defaultValues: { email: '', password: '' } });

  const isFormSubmitted = !!form.formState.submitCount;
  const fieldEmailActiveErrors = Object.keys(form.formState.errors.email?.types || {});
  const fieldPassActiveErrors = Object.keys(form.formState.errors.password?.types || {});
  const isFieldEmailDirty = !!form.formState.dirtyFields.email;
  const isFieldPassDirty = !!form.formState.dirtyFields.password;

  const onSubmit = (values: any) => alert(`No bugs - no cry \n\n ${JSON.stringify(values, null, 2)}`);

  return (
    <form className='w-[315px]' onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
        input={
          <FormInput
            placeholder={t('placeholderEmail')}
            isValid={isFieldEmailDirty && !fieldEmailActiveErrors.length}
            isInvalid={isFormSubmitted && !!fieldEmailActiveErrors.length}
            {...form.register('email', validationSchema.email.schema)}
          />
        }
        error={
          <FormError
            activeErrorKeys={fieldEmailActiveErrors}
            validationList={validationSchema.email.messages}
            isSubmittedField={isFormSubmitted}
            isTouchedField={isFieldEmailDirty}
          />
        }
      />

      <FormField
        className='mb-10'
        input={
          <FormInputPassword
            type='password'
            placeholder={t('placeholderPassword')}
            isValid={isFieldPassDirty && !fieldPassActiveErrors.length}
            isInvalid={isFormSubmitted && !!fieldPassActiveErrors.length}
            {...form.register('password', validationSchema.password.schema)}
          />
        }
        error={
          <FormError
            activeErrorKeys={fieldPassActiveErrors}
            validationList={validationSchema.password.messages}
            isSubmittedField={isFormSubmitted}
            isTouchedField={isFieldPassDirty}
          />
        }
      />

      <div className='flex justify-center'>
        <Button
          size='lg'
          radius='full'
          type='submit'
          color='primary'
          className='w-[240px] bg-action-gradient font-bold'
        >
          {t('signUp')}
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
