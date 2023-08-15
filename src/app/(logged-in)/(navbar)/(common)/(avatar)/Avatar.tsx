import Image from 'next/image';
import { getServerSession } from 'next-auth';

import { authOptions } from '~/app/api/auth/[...nextauth]/route';

import { getInitials } from './logic/get-initials';
import { stringToColor } from './logic/string-to-color';

export const Avatar = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return null;
  }

  const hasImage =
    session.user?.image !== null && session.user?.image !== undefined;
  const name = session.user.name ?? '';

  return (
    <label
      tabIndex={0}
      className="avatar placeholder btn btn-circle btn-ghost mt-5"
    >
      <div
        className="h-14 w-14 min-w-max rounded-full text-neutral-content opacity-70 ring-1 ring-success hover:opacity-90"
        style={{ backgroundColor: stringToColor(name) }}
      >
        {hasImage ? (
          <Image
            src={session.user.image as string}
            alt={name}
            width={60}
            height={60}
          />
        ) : (
          <span className="text-2xl">{getInitials(name)}</span>
        )}
      </div>
    </label>
  );
};
