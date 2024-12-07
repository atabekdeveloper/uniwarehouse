import React from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalHead, GlobalTable } from 'src/components/shareds';

import { IoIosAdd } from 'react-icons/io';
import { UiButton } from 'src/components/ui';
import { useGetProductTypesQuery } from 'src/services/index.api';
import { useFormStorageStore } from 'src/store';
import { useColumnsTable } from './useColumnsTable';

const ProductTypesTable: React.FC = () => {
  const [pageTitle, setPageTitle] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const columns = useColumnsTable();
  const { pathname } = useLocation();

  const { data: productTypes } = useGetProductTypesQuery({ count: 10 }, pathname as any);

  const toggleModal = useFormStorageStore((state) => state.toggleModal);

  React.useEffect(() => {
    if (pathname === '/product/types') setPageTitle('Тип');
    if (pathname === '/product/qualities') setPageTitle('Качество');
    if (pathname === '/product/units') setPageTitle('Единица');
    if (pathname === '/product/statuses') setPageTitle('Статусы');
  }, [pathname]);
  return (
    <GlobalTable
      dataSource={productTypes?.data}
      columns={columns}
      loading={false}
      title={() => (
        <GlobalHead
          title={pageTitle}
          childs={[<UiButton icon={<IoIosAdd />} onClick={toggleModal} />]}
        />
      )}
      pagination={{
        total: 20,
        pageSize: 20,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { ProductTypesTable };
