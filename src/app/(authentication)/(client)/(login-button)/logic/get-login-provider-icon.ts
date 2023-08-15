import { match } from 'ts-pattern';

import { EmailIcon, GitHubIcon, GoogleIcon } from '~/components/generic/icons';

export type LoginProvider = 'google' | 'github' | 'email';

export const getLoginProviderIcon = (provider: LoginProvider) =>
  match(provider)
    .with('email', () => EmailIcon)
    .with('github', () => GitHubIcon)
    .with('google', () => GoogleIcon)
    .exhaustive();
