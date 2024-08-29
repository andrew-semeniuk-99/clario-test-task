import { FC, PropsWithChildren } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { NextUIProvider } from '@nextui-org/react';

const Providers: FC<PropsWithChildren> = async ({ children }) => {
  const messages = await getMessages();

  return (
    <NextUIProvider>
      <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
    </NextUIProvider>
  );
};

export default Providers;
