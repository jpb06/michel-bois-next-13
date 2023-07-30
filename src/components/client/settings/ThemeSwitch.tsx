import { usePathname } from 'next/navigation';
import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';

type Theme = 'light' | 'dark';

type ThemeSwitchProps = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeSwitch = ({ theme, setTheme }: ThemeSwitchProps) => {
  const pathName = usePathname();

  const handleThemeChanged: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.target.checked ? setTheme('dark') : setTheme('light');
  };

  if (pathName === '/login') {
    return null;
  }

  return (
    <div className="flex w-full justify-center">
      <div className="absolute right-auto top-8 z-50 rounded-3xl bg-secondary/70 transition delay-100 duration-500 ease-in-out hover:scale-125 hover:bg-secondary/90 lg:top-20">
        <div className="tooltip tooltip-bottom" data-tip="App theme">
          <input
            type="checkbox"
            className="toggle toggle-lg mx-2 mt-1.5"
            checked={theme === 'dark'}
            onChange={handleThemeChanged}
          />
        </div>
      </div>
    </div>
  );
};
