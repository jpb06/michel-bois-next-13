'use client';

import { signIn } from 'next-auth/react';
import type { PropsWithChildren } from 'react';

import { IconButton } from '~/components/generic/icon-button/IconButton';

import type { LoginProvider } from './logic/get-login-provider-icon';
import { getLoginProviderIcon } from './logic/get-login-provider-icon';

type LoginButtonClientProps = {
  provider: LoginProvider;
};

export const LoginButtonClient = ({
  provider,
  children,
}: PropsWithChildren<LoginButtonClientProps>) => {
  const Icon = getLoginProviderIcon(provider);

  const handleClick = () => {
    signIn(provider);
  };

  return (
    <IconButton Icon={Icon} onClick={handleClick}>
      {children}
    </IconButton>
  );
};
