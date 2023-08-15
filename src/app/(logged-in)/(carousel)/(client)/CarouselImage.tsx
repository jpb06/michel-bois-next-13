import { motion as Motion } from 'framer-motion';
import Image from 'next/image';
import { match } from 'ts-pattern';

import type { GetAssetsResult } from '../(server)/(get-assets)';

export type Direction = 'none' | 'left' | 'right';

type CarouselImageProps = GetAssetsResult[number] & {
  direction: Direction;
};

export const CarouselImage = ({
  url,
  placeholderDataUri,
  name,
  width,
  height,
  direction,
}: CarouselImageProps) => (
  <Motion.div
    className="m-8 w-full sm:w-fit"
    whileHover={{ scale: 1.05 }}
    initial={{
      opacity: 0,
      translateX: match(direction)
        .with('none', () => 0)
        .with('left', () => -200)
        .with('right', () => 200)
        .exhaustive(),
    }}
    transition={{ delay: 0.3, duration: 0.34 }}
    whileInView={{ opacity: 1, translateX: 0 }}
    key={url}
  >
    <Image
      className="rounded-lg ring-2 ring-neutral-800 hover:ring-[2.5px] hover:ring-neutral-900 w-full sm:w-auto sm:h-full"
      src={url}
      placeholder="blur"
      blurDataURL={placeholderDataUri}
      alt={name}
      sizes="100vh"
      width={width}
      height={height}
      priority
    />
  </Motion.div>
);
