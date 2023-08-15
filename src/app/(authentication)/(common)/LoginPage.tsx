import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authOptions } from '~/app/api/auth/[...nextauth]/route';

import { LoginButtonClient } from '../(client)/(login-button)/LoginButton';

export const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/');
  }

  return (
    <>
      <div className="form-control mt-6">
        <LoginButtonClient provider="google">
          Login with google
        </LoginButtonClient>
      </div>
      <div className="form-control mt-1">
        <LoginButtonClient provider="github">
          Login with github
        </LoginButtonClient>
      </div>
      <div className="divider text-accent">OR</div>
      <div className="form-control mt-1">
        <LoginButtonClient provider="email">Login by email</LoginButtonClient>
      </div>
    </>
  );
};
