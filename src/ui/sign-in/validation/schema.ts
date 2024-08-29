import 'next-intl';

const getValidationSchema = (t: (key: string) => string) => ({
  email: {
    schema: {
      validate: {
        isEmail: (value: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,8}$/.test(value),
      },
    },
    messages: [{ key: 'isEmail', message: t('validationInvalidEmail'), isHiddenInitial: true }],
  },
  password: {
    schema: {
      validate: {
        maxLength: (value: string) => value?.length <= 64,
        hasNumber: (value: string) => /[0-9]/.test(value),
        minLength: (value: string) => /^(?!.*\s).{8,}$/.test(value),
        hasRegistry: (value: string) => /^(?=.*[a-z])(?=.*[A-Z])/.test(value),
      },
    },
    messages: [
      { key: 'minLength', message: t('validationMinLengthNoSpaces') },
      { key: 'maxLength', message: t('validationMaxLength'), isHiddenInitial: true },
      { key: 'hasRegistry', message: t('validationHasRegistry') },
      { key: 'hasNumber', message: t('validationHasNumber') },
    ],
  },
});

export default getValidationSchema;
