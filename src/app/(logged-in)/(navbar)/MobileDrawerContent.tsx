import { LogoutMenuItem } from '~/components/client/login/logout-menu-item/LogoutMenuItem';

import { Avatar } from './(common)/(avatar)/Avatar';

type MobileDrawerContentProps = {
  userName?: string | null;
};

export const MobileDrawerContent = ({ userName }: MobileDrawerContentProps) => (
  <div className="drawer-side z-50">
    <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
    <ul className="menu h-full w-72 rounded-r-2xl bg-sky-900 p-0">
      <div className="flex w-full flex-col rounded-tr-2xl bg-cyan-950 p-4">
        <Avatar />
        <div className="mt-4">{userName}</div>
      </div>

      <li className="mx-2 mt-4 text-xl">
        <a>Settings</a>
      </li>
      <li className="mx-2 text-xl">
        <LogoutMenuItem />
      </li>
    </ul>
  </div>
);
