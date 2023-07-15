import { redirect } from 'next/navigation';

import { LoginPage as LoginBasePage } from '~/components/login/LoginPage';

type LoginPageProps = {
  searchParams: { callbackUrl?: string };
};

const LoginPage = ({ searchParams }: LoginPageProps) => {
  if (searchParams.callbackUrl) {
    redirect(searchParams.callbackUrl);
  }

  return <LoginBasePage />;
};

export default LoginPage;
