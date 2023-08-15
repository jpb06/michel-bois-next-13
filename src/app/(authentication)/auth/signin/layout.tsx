import type { PropsWithChildren } from 'react';

import { LoginLayout as LoginLayoutPage } from '../../(common)/LoginLayout';

const LoginLayout = ({ children }: PropsWithChildren) => (
  <LoginLayoutPage>{children}</LoginLayoutPage>
);

export default LoginLayout;
