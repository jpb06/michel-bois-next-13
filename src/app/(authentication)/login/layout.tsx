import type { PropsWithChildren } from 'react';

import { LoginLayout } from '../(common)/LoginLayout';

const Layout = ({ children }: PropsWithChildren) => (
  <LoginLayout>{children}</LoginLayout>
);

export default Layout;
