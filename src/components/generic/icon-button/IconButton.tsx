import { PropsWithChildren } from 'react';

import { WithCssProperties } from '~/components/generic/icons/types/with-css-properties.type';

type IconButtonProps = {
  onClick: () => void;
  Icon: React.FC<WithCssProperties>;
};

export const IconButton = ({
  onClick,
  Icon,
  children,
}: PropsWithChildren<IconButtonProps>) => (
  <button className="btn btn-accent btn-outline" onClick={onClick}>
    <Icon style={{ width: 20 }} />
    <div className="ml-3">{children}</div>
  </button>
);
