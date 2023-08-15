import { redirect } from 'next/navigation';

import { LoginPage as LoginBasePage } from '../../(common)/LoginPage';

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
