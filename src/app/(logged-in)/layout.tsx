//import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { PropsWithChildren } from 'react';

import { Brand } from './(navbar)/(common)/Brand';
import { DrawerContent } from './(navbar)/DrawerContent';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Navbar = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    //redirect('/login');
  }

  return (
    <div className="drawer">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="z-40 flex w-full justify-center">
          <div className="navbar absolute -top-6 w-72 rounded-3xl bg-secondary/70 transition delay-100 duration-300 ease-in-out hover:translate-y-8 hover:bg-secondary">
            <label
              htmlFor="navbar-drawer"
              className="btn btn-square btn-ghost rounded-2xl"
            >
              <Brand />
            </label>
            <div className="flex-1 px-1 text-success">Michel Bois</div>
          </div>
        </div>
        <div className="flex min-h-screen w-full flex-row justify-center">
          {children}
        </div>
      </div>
      <DrawerContent userName={session?.user?.name} />
    </div>
  );
};

export default Navbar;
