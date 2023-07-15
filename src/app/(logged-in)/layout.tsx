import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { PropsWithChildren } from 'react';

import { CommonContent } from './(navbar)/CommonContent';
import { DesktopMenuContent } from './(navbar)/DesktopMenuContent';
import { MobileDrawerContent } from './(navbar)/MobileDrawerContent';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Navbar = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="p-5">
      <div className="drawer">
        <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="flex w-full justify-center">
            <div className="navbar rounded-xl bg-sky-900 sm:w-72 sm:transition sm:duration-500 sm:delay-100 sm:ease-in-out sm:hover:scale-110">
              <CommonContent />
              <DesktopMenuContent />
            </div>
          </div>
          <div className="m-2">{children}</div>
        </div>
        <MobileDrawerContent userName={session.user?.name} />
      </div>
    </div>
  );
};

export default Navbar;
