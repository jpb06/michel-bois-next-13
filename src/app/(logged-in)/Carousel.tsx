const imgs = [
  '/img/tmp/1998 - Nice.jpg',
  '/img/tmp/2009 - Carpe.jpg',
  '/img/tmp/2001 - Olivier du mont Vinaigrier.jpg',
  '/img/tmp/Ventotene.jpg',
  '/img/tmp/1998 - Clue Italie.JPG',
  "/img/tmp/2012 - Parc Estiennes d'Orves.jpeg",
  '/img/tmp/2009 - Bataillé Chatélaillon.jpg',
  '/img/tmp/Acqueduc Antibes.jpg',
  '/img/tmp/Unknown - 18.jpg',
  '/img/tmp/2005 - Araignée.jpg',
  '/img/tmp/1998 - Jean de Vienne.JPG',
  '/img/tmp/Bataillé.jpg',
];

export const Carousel = () => (
  <div className="bg-gradient-radial from-base-300 to-secondary">
    <div className="bg-noise">
      <div className="carousel carousel-center h-screen w-full">
        {imgs.map((path, i) => (
          <div
            className="carousel-item flex flex-row justify-center lg:w-full"
            key={i}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={path}
              className="m-8 rounded-lg ring-2 ring-neutral-800 transition delay-100 duration-500 ease-in-out hover:scale-105 hover:ring-[2.5px] hover:ring-neutral-900"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);
