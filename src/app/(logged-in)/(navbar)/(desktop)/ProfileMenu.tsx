import { LogoutMenuItem } from '~/components/client/login/logout-menu-item/LogoutMenuItem';

import { Avatar } from '../(common)/(avatar)/Avatar';

export const ProfileMenu = () => (
  <div className="dropdown-end dropdown">
    <Avatar />
    <ul className="menu dropdown-content rounded-box !-right-5 mt-3 w-72 border-2 border-teal-600 bg-base-300 p-2 shadow">
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <LogoutMenuItem />
      </li>
    </ul>
  </div>
);
