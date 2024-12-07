import { ColumnsType } from 'antd/es/table';
import { GlobalIcon } from 'src/components/ui';
import { TProductItem } from 'src/services/products/products.types';
import { useFormStorageStore, useIconsPersistStore } from 'src/store';

export const useColumnsTable = () => {
  const icons = useIconsPersistStore((state) => state.icons);
  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);
  const columns: ColumnsType<TProductItem> = [
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
      title: 'Единица',
      dataIndex: 'unit',
      key: 'unit',
      onCell: (data) => ({ onClick: () => setParamsForm(data) }),
      render: (_, r) => (
        <GlobalIcon
          value={icons.find((icon) => icon.code === r.unit.icon)?.content}
          color={r.unit.color}
          bgColor={r.unit.bgColor}
        />
      ),
    },
    {
      title: 'Качество',
      dataIndex: 'quality',
      key: 'quality',
      onCell: (data) => ({ onClick: () => setParamsForm(data) }),
      render: (_, r) => (
        <GlobalIcon
          value={icons.find((icon) => icon.code === r.quality.icon)?.content}
          color={r.quality.color}
          bgColor={r.quality.bgColor}
        />
      ),
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      onCell: (data) => ({ onClick: () => setParamsForm(data) }),
      render: (_, r) => (
        <GlobalIcon
          value={icons.find((icon) => icon.code === r.status.icon)?.content}
          color={r.status.color}
          bgColor={r.status.bgColor}
        />
      ),
    },
  ];
  return columns;
};
