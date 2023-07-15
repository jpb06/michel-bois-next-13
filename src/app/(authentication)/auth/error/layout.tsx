import { PropsWithChildren } from 'react';

import { LoginLayout } from '~/components/login/LoginLayout';

const ErrorLayout = ({ children }: PropsWithChildren) => (
  <LoginLayout>{children}</LoginLayout>
);

export default ErrorLayout;
