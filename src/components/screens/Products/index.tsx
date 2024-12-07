import React from 'react';

import { ProductsForm } from './form';
import { ProductsTable } from './table';

const Products: React.FC = () => {
  return (
    <>
      <ProductsForm />
      <ProductsTable />
    </>
  );
};

export { Products };
