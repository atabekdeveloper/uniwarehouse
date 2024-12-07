import { Form, Input } from 'antd';
import React from 'react';
import { GlobalModal } from 'src/components/shareds';
import { useCreateProductMutation } from 'src/services/index.api';
import { TProductChange } from 'src/services/products/products.types';
import { useFormStorageStore } from 'src/store';

const ProductsForm: React.FC = () => {
  const [form] = Form.useForm();
  const paramsForm = useFormStorageStore((state) => state.paramsForm);

  const {
    mutate: createProduct,
    isLoading: createLoading,
    isError: createError,
  } = useCreateProductMutation();

  const onFinish = (values: TProductChange) => createProduct({ ...values });

  React.useEffect(() => {
    if (paramsForm) form.setFieldsValue(paramsForm);
  }, [paramsForm]);
  return (
    <GlobalModal form={form} isLoading={createLoading} isError={createError}>
      <Form
        name="Products Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
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
      </Form>
    </GlobalModal>
  );
};

export { ProductsForm };
