import { LogoutMenuItemClient } from './(client)/(logout-menu-item)/LogoutMenuItemClient';
import { Avatar } from './(common)/(avatar)/Avatar';

type MobileDrawerContentProps = {
  userName?: string | null;
};

export const DrawerContent = ({ userName }: MobileDrawerContentProps) => (
  <div className="drawer-side z-50">
    <label htmlFor="navbar-drawer" className="drawer-overlay" />
    <ul className="menu h-full w-72 rounded-r-2xl bg-primary p-0">
      <div className="flex w-full flex-col rounded-tr-2xl bg-cyan-950 p-4">
        <Avatar />
        <div className="mt-4">{userName}</div>
      </div>

      <li className="mx-2 mt-4 text-xl">
        <a>Settings</a>
      </li>
      <li className="mx-2 text-xl">
        <LogoutMenuItemClient />
      </li>
    </ul>
  </div>
);
