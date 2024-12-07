import { MenuProps } from 'antd/lib/menu/menu';
import { LuLogOut } from 'react-icons/lu';

export const routes: MenuProps['items'] = [
  {
    type: 'divider',
    style: { margin: '15px 0' },
  },
  {
    key: '/logout',
    label: 'Выход',
    icon: <LuLogOut />,
  },
];
