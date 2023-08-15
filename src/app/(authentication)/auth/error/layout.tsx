import type { PropsWithChildren } from 'react';

import { LoginLayout } from '../../(common)/LoginLayout';

const ErrorLayout = ({ children }: PropsWithChildren) => (
  <LoginLayout>{children}</LoginLayout>
);

export default ErrorLayout;
