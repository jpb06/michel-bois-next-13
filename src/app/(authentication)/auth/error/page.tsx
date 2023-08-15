import { DisplayToast } from '~/components/client/generic/display-toast/DisplayToast';

import { LoginPage } from '../../(common)/LoginPage';

type ErrorPageProps = {
  searchParams: { error: string };
};

const ErrorPage = ({ searchParams }: ErrorPageProps) => (
  <>
    <DisplayToast type="error" message={searchParams.error} />
    <LoginPage />
  </>
);

export default ErrorPage;
