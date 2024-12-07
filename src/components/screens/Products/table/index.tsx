import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { GlobalHead, GlobalTable } from 'src/components/shareds';
import { UiButton } from 'src/components/ui';
import { useFormStorageStore } from 'src/store';

import { useGetProductsQuery } from 'src/services/products/products.api';
import { useColumnsTable } from './useColumnsTable';

const ProductsTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const columns = useColumnsTable();

  const { data: products, isLoading } = useGetProductsQuery({
    page: currentPage,
  });

  const toggleModal = useFormStorageStore((state) => state.toggleModal);

  return (
    <GlobalTable
      dataSource={products?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <GlobalHead
          title="Продукты"
          childs={[<UiButton icon={<AiOutlinePlus />} onClick={toggleModal} />]}
        />
      )}
      pagination={{
        total: 10,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { ProductsTable };
