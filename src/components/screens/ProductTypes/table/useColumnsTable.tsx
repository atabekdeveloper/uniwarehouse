import { ColumnsType } from 'antd/es/table';
import { GlobalIcon } from 'src/components/ui';
import { TProductTypeItem } from 'src/services/product-types/product-types.types';
import { useFormStorageStore, useIconsPersistStore } from 'src/store';

export const useColumnsTable = () => {
  const icons = useIconsPersistStore((state) => state.icons);
  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);
  const columns: ColumnsType<TProductTypeItem> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      width: 70,
      render: (value) => value || '-',
      onCell: (data) => ({ onClick: () => setParamsForm(data) }),
    },
    {
      title: "Название (o'zbekcha)",
      dataIndex: 'nameUz',
      key: 'nameUz',
      render: (value) => value || '-',
      onCell: (data) => ({ onClick: () => setParamsForm(data) }),
    },
    {
      title: 'Название (русский)',
      dataIndex: 'nameRu',
      key: 'nameRu',
      render: (value) => value || '-',
      onCell: (data) => ({ onClick: () => setParamsForm(data) }),
    },
    {
      title: 'Иконка',
      dataIndex: 'icon',
      key: 'icon',
      onCell: (data) => ({ onClick: () => setParamsForm(data) }),
      render: (_, r) => (
        <GlobalIcon
          value={icons.find((icon) => icon.code === r.icon)?.content}
          color={r.color}
          bgColor={r.bgColor}
        />
      ),
    },
  ];
  return columns;
};
