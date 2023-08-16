type CarouselNavButtonProps = {
  Icon: React.ElementType;
  onClick: () => void;
  className: string;
  visible: boolean;
};

export const CarouselNavButton = ({
  Icon,
  onClick,
  className,
  visible,
}: CarouselNavButtonProps) => {
  if (!visible) {
    return null;
  }

  return (
    <button className={`absolute z-10 top-5 ${className}`} onClick={onClick}>
      <Icon className="w-16 text-accent hover:text-yellow-500 opacity-60 hover:opacity-75 hover:scale-125 transition duration-500" />
    </button>
  );
};
