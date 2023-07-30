import { Brand } from '~/app/(logged-in)/(navbar)/(common)/Brand';

export const CommonContent = () => (
  <>
    <div className="flex-none lg:hidden">
      <label htmlFor="mobile-drawer" className="btn btn-square btn-ghost">
        <Brand />
      </label>
    </div>
    <div className="hidden lg:flex">
      <Brand />
    </div>
    <div className="flex-1 px-1 text-success">Michel Bois</div>
  </>
);
