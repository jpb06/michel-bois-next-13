'use client';

import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

export const LogoutMenuItem = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const data = await signOut({ redirect: false });
    router.push(`${data.url}/login`);
  };

  return <button onClick={handleLogout}>Logout</button>;
};
