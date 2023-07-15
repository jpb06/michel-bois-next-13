'use client';

import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';

type Theme = 'night' | 'emerald';

type ThemeSwitchProps = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeSwitch = ({ theme, setTheme }: ThemeSwitchProps) => {
  const handleThemeChanged: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.target.checked ? setTheme('night') : setTheme('emerald');
  };

  return (
    <div className="flex w-full justify-end sm:justify-center">
      <div className="absolute z-10 right-6 top-8 sm:right-auto sm:top-20 sm:bg-sky-900 sm:rounded-3xl sm:transition sm:duration-500 sm:delay-100 sm:ease-in-out sm:hover:scale-125">
        <div className="tooltip tooltip-bottom" data-tip="App theme">
          <input
            type="checkbox"
            className="toggle toggle-lg mx-2 mt-1.5"
            checked={theme === 'night'}
            onChange={handleThemeChanged}
          />
        </div>
      </div>
    </div>
  );
};
