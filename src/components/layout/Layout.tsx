import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthPersistStore, useIconsPersistStore, useToggleStore } from 'src/store';

import { useGetIconsQuery } from 'src/services/icons/icons.api';

import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';

const Layout: React.FC = () => {
  const { data: icons, isSuccess } = useGetIconsQuery();

  const token = useAuthPersistStore((state) => state.accessToken);
  const { isDrawer, isCollapsed } = useToggleStore();
  const setIcons = useIconsPersistStore((state) => state.setIcons);

  const getMainMargin = () => {
    if (!isDrawer) return 'max900:ml-3 ml-5';
    return isCollapsed ? 'ml-[88px]' : 'ml-[260px]';
  };

  React.useEffect(() => {
    if (isSuccess) setIcons({ icons: icons.data });
  }, [isSuccess]);
  return (
    <div className="flex w-full h-full bg-white">
      <Header />
      <Navbar />
      <main
        className={`relative transition-all duration-200 grow min-h-[calc(100vh_-_70px)] bg-[#eef2f6] flex flex-col mt-[70px] p-3 overflow-hidden rounded-t-[8px] max900:mr-3 mr-5 max900:ml-3 ${getMainMargin()}`}
      >
        {token ? <Outlet /> : <Navigate to="/login" />}
      </main>
    </div>
  );
};

export { Layout };
