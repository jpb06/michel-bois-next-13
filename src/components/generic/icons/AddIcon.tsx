import type { WithCssProperties } from '~/components/generic/icons/types/with-css-properties.type';

export const AddIcon = ({ style, className }: WithCssProperties) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
  >
    <path
      d="M12 8V14M15 11H9M12.2896 17.9984C18.0965 17.9343 21 15.9189 21 11C21 6 18 4 12 4C6 4 3 6 3 11C3 14.0771 4.13623 16.018 6.40868 17.0557L5 21L12.2896 17.9984Z"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
