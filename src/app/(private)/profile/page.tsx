import { Metadata } from 'next';

import { EPageTitle } from '@/constants/pageTitle';

// TODO example page

export const metadata: Metadata = {
  title: EPageTitle.PROFILE,
};

const Page = () => {
  return <div>{EPageTitle.PROFILE}</div>;
};

export default Page;
