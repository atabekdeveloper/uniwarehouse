import { Form, Input, InputNumber, Select } from 'antd';
import React from 'react';
import { GlobalModal } from 'src/components/shareds';
import { GlobalIcon } from 'src/components/ui';
import {
  useCreateProductMutation,
  useEditProductMutation,
  useGetProductTypesQuery,
} from 'src/services/index.api';
import { TProductChange } from 'src/services/products/products.types';
import { useFormStorageStore } from 'src/store';
import { formatNum, handleNumericInputKeyDown } from 'src/utils';

const ProductsForm: React.FC = () => {
  const [form] = Form.useForm();
  const paramsForm = useFormStorageStore((state) => state.paramsForm);
  const { data: productTypes } = useGetProductTypesQuery({ count: 100 }, '/product/types');
  const { data: productUnitTypes } = useGetProductTypesQuery({ count: 100 }, '/product/units');
  const { data: productQualitiesTypes } = useGetProductTypesQuery(
    { count: 100 },
    '/product/qualities',
  );

  const {
    mutate: createProduct,
    isLoading: createLoading,
    isError: createError,
  } = useCreateProductMutation();
  const {
    mutate: editProduct,
    isLoading: editLoading,
    isError: editError,
  } = useEditProductMutation();

  const onFinish = (values: TProductChange) => {
    if (paramsForm) editProduct({ ...values, id: paramsForm.id });
    else createProduct({ ...values });
  };

  React.useEffect(() => {
    if (paramsForm)
      form.setFieldsValue({
        ...paramsForm,
        productTypesId: paramsForm.type.id,
        unitId: paramsForm.unit.id,
        qualityId: paramsForm.quality.id,
      });
  }, [paramsForm]);
  return (
    <GlobalModal
      form={form}
      isLoading={createLoading || editLoading}
      isError={createError || editError}
      width={520}
    >
      <Form
        name="Products Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <div className="flex gap-3">
          <Form.Item
            className="w-full"
            name="nameUz"
            label="Название (o'zbekcha)"
            rules={[{ required: true, message: '' }]}
          >
            <Input.TextArea autoSize />
          </Form.Item>
          <Form.Item
            className="w-full"
            name="nameRu"
            label="Название (русский)"
            rules={[{ required: true, message: '' }]}
          >
            <Input.TextArea autoSize />
          </Form.Item>
        </div>
        <div className="flex gap-3">
          <Form.Item
            className="w-full"
            name="tinCode"
            label="ИНН КОД"
            rules={[{ required: true, message: '' }]}
          >
            <Input.TextArea autoSize />
          </Form.Item>
          <Form.Item
            className="w-full"
            name="amount"
            label="Количество"
            rules={[{ required: true, message: '' }]}
          >
            <InputNumber className="w-full" onKeyDown={handleNumericInputKeyDown} />
          </Form.Item>
          <Form.Item
            className="w-full"
            name="price"
            label="Цена"
            rules={[{ required: true, message: '' }]}
          >
            <InputNumber
              className="w-full"
              formatter={formatNum as any}
              onKeyDown={handleNumericInputKeyDown}
            />
          </Form.Item>
        </div>
        <div className="flex gap-3">
          <Form.Item
            className="w-full"
            name="productTypesId"
            label="Тип"
            rules={[{ required: true, message: '' }]}
          >
            <Select
              className="h-14"
              options={productTypes?.data.map((el) => ({
                value: el.id,
                label: (
                  <GlobalIcon
                    value={el.icon}
                    color={el.color}
                    bgColor={el.bgColor}
                    title={el.nameRu}
                  />
                ),
              }))}
            />
          </Form.Item>
          <Form.Item
            className="w-full"
            name="unitId"
            label="Единица"
            rules={[{ required: true, message: '' }]}
          >
            <Select
              className="h-14"
              options={productUnitTypes?.data.map((el) => ({
                value: el.id,
                label: (
                  <GlobalIcon
                    value={el.icon}
                    color={el.color}
                    bgColor={el.bgColor}
                    title={el.nameRu}
                  />
                ),
              }))}
            />
          </Form.Item>
          <Form.Item
            className="w-full"
            name="qualityId"
            label="Качество"
            rules={[{ required: true, message: '' }]}
          >
            <Select
              className="h-14"
              options={productQualitiesTypes?.data.map((el) => ({
                value: el.id,
                label: (
                  <GlobalIcon
                    value={el.icon}
                    color={el.color}
                    bgColor={el.bgColor}
                    title={el.nameRu}
                  />
                ),
              }))}
            />
          </Form.Item>
        </div>
      </Form>
    </GlobalModal>
  );
};

export { ProductsForm };
