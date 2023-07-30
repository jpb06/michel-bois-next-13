import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Html } from '~/components/client/settings/Html';

import { GitHubIcon, ImageIcon } from '../components/generic/icons';

export const metadata = {
  title: 'Michel Bois',
  description: 'Aquarelles et oeuvres',
};

// const Footer = () => (
//   <footer className="footer items-center bg-sky-900 px-4 text-neutral-content">
//     <div className="grid-flow-col items-center">
//       <ImageIcon className="h-10 w-10" />
//       <p>Michel Bois</p>
//     </div>
//     <div className="grid-flow-col gap-4 lg:place-self-center lg:justify-self-end">
//       <a>
//         <GitHubIcon className="my-4 h-9 w-9" />
//       </a>
//     </div>
//   </footer>
// );

const RootLayout = ({ children }: PropsWithChildren) => (
  <Html>
    <div className="flex min-h-screen flex-col">
      <div className="grow">{children}</div>
      {/* <Footer /> */}
    </div>
    <ToastContainer position="top-center" />
  </Html>
);

export default RootLayout;
