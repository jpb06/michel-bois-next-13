import { PropsWithChildren } from 'react';

import { LoginLayout } from '~/components/login/LoginLayout';

const Layout = ({ children }: PropsWithChildren) => (
  <LoginLayout>{children}</LoginLayout>
);

export default Layout;
