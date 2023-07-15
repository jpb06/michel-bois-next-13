import { redirect } from 'next/navigation';

type NewUserPageProps = {
  searchParams: { callbackUrl: string };
};

const NewUserPage = ({ searchParams }: NewUserPageProps) => {
  redirect(searchParams.callbackUrl);
};

export default NewUserPage;
