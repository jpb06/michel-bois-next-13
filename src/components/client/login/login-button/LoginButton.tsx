'use client';

import { signIn } from 'next-auth/react';
import { PropsWithChildren } from 'react';

import { IconButton } from '~/components/generic/icon-button/IconButton';

import {
  getLoginProviderIcon,
  LoginProvider,
} from './logic/get-login-provider-icon';

type LoginButtonProps = {
  provider: LoginProvider;
};

export const LoginButton = ({
  provider,
  children,
}: PropsWithChildren<LoginButtonProps>) => {
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
