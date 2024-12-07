import React from 'react';

import { ProductTypesForm } from './form';
import { ProductTypesTable } from './table';

const ProductTypes: React.FC = () => {
  return (
    <>
      <ProductTypesForm />
      <ProductTypesTable />
    </>
  );
};

export { ProductTypes };
