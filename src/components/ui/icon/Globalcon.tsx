import React from 'react';
import { ReactSVG } from 'react-svg';
import { useIconsPersistStore } from 'src/store';

interface IGlobalIcon {
  value?: string;
  color: string;
  bgColor: string;
  border?: boolean;
  title?: string;
}

const GlobalIcon: React.FC<IGlobalIcon> = ({ value, color, bgColor, border, title }) => {
  const icons = useIconsPersistStore((state) => state.icons);
  return (
    <div className="flex items-center gap-4">
      <ReactSVG
        src={`data:image/svg+xml, ${icons.find((icon) => icon.code === value)?.content}`}
        className="w-12 h-12 p-2 rounded-full"
        style={{
          color,
          backgroundColor: bgColor,
          border: border ? '1px solid #eee' : '',
        }}
      />
      <h3>{title}</h3>
    </div>
  );
};

export { GlobalIcon };
