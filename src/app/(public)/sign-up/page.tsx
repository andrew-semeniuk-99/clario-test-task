import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import SignUp from '@/ui/sign-in/sign-in';

import { EPageTitle } from '@/constants/pageTitle';

export const metadata: Metadata = {
  title: EPageTitle.SIGN_UP,
};

const SignInPage = () => {
  const t = useTranslations();

  return (
    <div className='mx-auto flex flex-col items-center py-32'>
      <h1 className='mb-8 text-main-title font-bold'>{t('signUp')}</h1>

      <SignUp />
    </div>
  );
};

export default SignInPage;
