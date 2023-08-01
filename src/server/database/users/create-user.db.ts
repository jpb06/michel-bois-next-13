import { Account } from 'next-auth';
import { match } from 'ts-pattern';

import { prisma } from '..';

type GoogleProfile = {
  email: string;
  name: string;
  picture: string;
};

type GithubProfile = {
  email: string;
  name: string;
  avatar_url: string;
};

export const createUser = async (
  account: Account,
  profile: GoogleProfile | GithubProfile,
) => {
  await match(account.provider)
    .with('github', async () => {
      const githubProfile = profile as GithubProfile;
      await prisma.user.create({
        data: {
          email: githubProfile.email,
          name: githubProfile.name,
          image: githubProfile.avatar_url,
        },
      });
    })
    .with('google', async () => {
      const googleProfile = profile as GoogleProfile;
      await prisma.user.create({
        data: {
          email: googleProfile.email,
          name: googleProfile.name,
          image: googleProfile.picture,
        },
      });
    })
    .otherwise(() => {
      throw new Error('Unhandled provider');
    });
};
