import type { PropsWithChildren } from 'react';

type CarouselNavButtonProps = {
  onClick: () => void;
  className: string;
  visible: boolean;
};

export const CarouselNavButton = ({
  children,
  onClick,
  className,
  visible,
}: PropsWithChildren<CarouselNavButtonProps>) => {
  if (!visible) {
    return null;
  }

  return (
    <button
      className={`btn btn-primary btn-circle absolute z-10 hover:scale-125 hover:bg-accent top-5 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
