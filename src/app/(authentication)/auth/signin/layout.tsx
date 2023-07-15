import { PropsWithChildren } from 'react';

import { LoginLayout as LoginLayoutPage } from '~/components/login/LoginLayout';

const LoginLayout = ({ children }: PropsWithChildren) => (
  <LoginLayoutPage>{children}</LoginLayoutPage>
);

export default LoginLayout;
