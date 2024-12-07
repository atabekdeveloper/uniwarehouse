import React from 'react';
import { ReactSVG } from 'react-svg';

interface IGlobalIcon {
  value?: string;
  color: string;
  bgColor: string;
  border?: boolean;
}

const GlobalIcon: React.FC<IGlobalIcon> = ({ value, color, bgColor, border }) => {
  return (
    <ReactSVG
      src={`data:image/svg+xml, ${value}`}
      className="w-12 h-12 p-2 rounded-full"
      style={{
        color,
        backgroundColor: bgColor,
        border: border ? '1px solid #eee' : '',
      }}
    />
  );
};

export { GlobalIcon };
