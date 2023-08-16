'use client';

import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';

import type { Direction } from './CarouselImage';
import { CarouselImage } from './CarouselImage';
import { CarouselNavButton } from './CarouselNavButton';
import type { GetAssetsResult } from '../(server)/(get-assets)';

type CarouselClientProps = {
  pictures: GetAssetsResult;
};

export const CarouselClient = ({ pictures }: CarouselClientProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>('none');

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < pictures.length - 1;

  const handlePrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex < pictures.length - 1 ? prevIndex + 1 : prevIndex,
    );
  };

  const currentPicture = pictures.at(currentIndex);
  if (!currentPicture) {
    return null;
  }

  return (
    <>
      <CarouselNavButton
        onClick={handlePrevious}
        className="left-5"
        visible={hasPrevious}
        Icon={ArrowLeftCircleIcon}
      />
      <CarouselNavButton
        onClick={handleNext}
        className="right-5"
        visible={hasNext}
        Icon={ArrowRightCircleIcon}
      />
      <div className="h-screen w-full">
        <div className="flex flex-row justify-center content-center flex-wrap sm:flex-nowrap w-full h-screen overflow-hidden">
          <CarouselImage {...currentPicture} direction={direction} />
        </div>
      </div>
    </>
  );
};
