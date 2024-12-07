import React from 'react';
import { useIconsPersistStore } from 'src/store';
import { GlobalIcon } from './Globalcon';

interface IGlobalIcons {
  iconCode: string;
  setIconCode: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalIcons: React.FC<IGlobalIcons> = ({ iconCode, setIconCode }) => {
  const icons = useIconsPersistStore((state) => state.icons);
  return (
    <ul className="grid grid-cols-5 gap-2">
      {icons.map((icon) => (
        <li key={icon.code} className="cursor-pointer" onClick={() => setIconCode(icon.code)}>
          <GlobalIcon value={icon.content} color="" bgColor="" border={iconCode === icon.code} />
        </li>
      ))}
    </ul>
  );
};

export { GlobalIcons };
