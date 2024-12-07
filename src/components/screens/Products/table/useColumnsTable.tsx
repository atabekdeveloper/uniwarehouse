import { ColumnsType } from 'antd/es/table';
import { GlobalIcon } from 'src/components/ui';
import { TProductItem } from 'src/services/products/products.types';
import { useFormStorageStore } from 'src/store';
import { formatPrice } from 'src/utils';

export const useColumnsTable = () => {
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
      title: 'Количество',
      dataIndex: 'amount',
      key: 'amount',
      render: (value) => value || '-',
      onCell: (data) => ({ onClick: () => setParamsForm(data) }),
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: (value) => formatPrice(value, ''),
      onCell: (data) => ({ onClick: () => setParamsForm(data) }),
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
      onCell: (data) => ({ onClick: () => setParamsForm(data) }),
      render: (_, r) => (
        <GlobalIcon
          value={r.type.icon}
          color={r.type.color}
          bgColor={r.type.bgColor}
          title={r.type.nameRu}
        />
      ),
    },
    {
      title: 'Единица',
      dataIndex: 'unit',
      key: 'unit',
      onCell: (data) => ({ onClick: () => setParamsForm(data) }),
      render: (_, r) => (
        <GlobalIcon
          value={r.unit.icon}
          color={r.unit.color}
          bgColor={r.unit.bgColor}
          title={r.unit.nameRu}
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
          value={r.quality.icon}
          color={r.quality.color}
          bgColor={r.quality.bgColor}
          title={r.quality.nameRu}
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
          value={r.status.icon}
          color={r.status.color}
          bgColor={r.status.bgColor}
          title={r.status.nameRu}
        />
      ),
    },
  ];
  return columns;
};
