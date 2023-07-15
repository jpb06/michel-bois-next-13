import { ProfileMenu } from './(desktop)/ProfileMenu';

export const DesktopMenuContent = () => (
  <div className="hidden flex-none sm:block">
    <ul className="menu menu-horizontal p-0 pr-3">
      {/* <CartMenu /> */}
      <ProfileMenu />
    </ul>
  </div>
);
