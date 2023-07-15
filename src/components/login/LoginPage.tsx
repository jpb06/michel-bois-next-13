import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authOptions } from '~/app/api/auth/[...nextauth]/route';
import { LoginButton } from '~/components/client/login/login-button/LoginButton';

export const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <>
        <div className="form-control mt-6">
          <LoginButton provider="google">Login with google</LoginButton>
        </div>
        <div className="form-control mt-1">
          <LoginButton provider="github">Login with github</LoginButton>
        </div>
        <div className="divider">OR</div>
        <div className="form-control mt-1">
          <LoginButton provider="email">Login by email</LoginButton>
        </div>
      </>
    );
  }

  redirect('/');
};
