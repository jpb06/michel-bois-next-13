export const getInitials = (fullName: string) =>
  fullName
    .split(' ')
    .slice(0, 3)
    .map((el) => el[0])
    .join('');
