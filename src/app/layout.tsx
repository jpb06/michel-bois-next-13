import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Html } from '~/components/client/settings/Html';

export const metadata = {
  title: 'Michel Bois',
  description: 'Aquarelles et oeuvres',
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <Html>
    {children}
    <ToastContainer position="top-center" />
  </Html>
);

export default RootLayout;
