import { ImageIcon } from '~/components/generic/icons';

type BrandProps = {
  displayName?: boolean;
};

export const Brand = ({ displayName = false }: BrandProps) => (
  <div className="flex-1 text-success">
    <ImageIcon className="w-12" />
    {displayName && <span className="text-xl normal-case">Michel Bois</span>}
  </div>
);
