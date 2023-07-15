import { Brand } from '~/app/(logged-in)/(navbar)/(common)/Brand';

export const CommonContent = () => (
  <>
    <div className="flex-none sm:hidden">
      <label htmlFor="mobile-drawer" className="btn btn-square btn-ghost">
        <Brand />
      </label>
    </div>
    <div className="hidden sm:flex">
      <Brand />
    </div>
    <div className="flex-1 px-1 text-teal-600">Saucisse</div>
  </>
);
