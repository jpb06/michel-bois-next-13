import { Effect } from 'effect';

import { CarouselClient } from './(carousel)/(client)/CarouselClient';
import { getAssets } from './(carousel)/(server)/(get-assets)';

const Page = async () => {
  const pictures = await Effect.runPromise(getAssets());

  return (
    <div className="bg-gradient-radial from-base-300 to-secondary w-full">
      <div className="bg-noise">
        <CarouselClient pictures={pictures} />
      </div>
    </div>
  );
};

export default Page;
