import { FiBox } from 'react-icons/fi';
import { VscTypeHierarchySub } from 'react-icons/vsc';

export const routes = [
  {
    key: '/products',
    label: 'Продукты',
    icon: <FiBox />,
  },
  {
    key: '/product-types',
    label: 'Справочники',
    icon: <VscTypeHierarchySub />,
    children: [
      { key: '/product/types', label: 'Тип' },
      { key: '/product/units', label: 'Единицы' },
      { key: '/product/qualities', label: 'Качество' },
      { key: '/product/statuses', label: 'Статусы' },
    ],
  },
];
