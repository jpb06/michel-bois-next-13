import { ImageIcon } from '~/components/generic/icons';

type BrandProps = {
  displayName?: boolean;
};

export const Brand = ({ displayName = false }: BrandProps) => (
  <div className="flex-1">
    <ImageIcon className="w-12 text-teal-600" />
    {displayName && <span className="text-xl normal-case">Michel Bois</span>}
  </div>
);
