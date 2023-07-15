import { PropsWithChildren } from 'react';

export const LoginLayout = ({ children }: PropsWithChildren) => (
  <div
    className="hero min-h-screen"
    style={{
      backgroundImage: `url("/clueItalie.jpg")`,
    }}
  >
    <div className="hero-overlay bg-base-100/40" />
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <div className="card w-full max-w-sm shrink-0 bg-base-100/80 shadow-2xl">
          <div className="card-body">
            <h1 className="mb-1 text-4xl font-bold night:text-teal-700">
              Michel Bois
            </h1>
            <h2 className="mb-5 text-2xl font-bold">Aquarelles et oeuvres</h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);
