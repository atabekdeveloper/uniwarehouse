import { Button, ColorPicker, Form, Input, Popover } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalModal } from 'src/components/shareds';
import { GlobalIcon, GlobalIcons } from 'src/components/ui';
import { useCreateProductTypeMutation, useEditProductTypeMutation } from 'src/services/index.api';
import { TProductChange } from 'src/services/products/products.types';
import { useFormStorageStore, useIconsPersistStore } from 'src/store';

const ProductTypesForm: React.FC = () => {
  const [form] = Form.useForm();
  const { pathname } = useLocation();
  const [iconCode, setIconCode] = React.useState('');
  const [color, setColor] = React.useState('');
  const [bgColor, setBgColor] = React.useState('');

  const icons = useIconsPersistStore((state) => state.icons);

  const {
    mutate: createProductType,
    isLoading: createLoading,
    isError: createError,
  } = useCreateProductTypeMutation(pathname);
  const {
    mutate: editProductType,
    isLoading: editLoading,
    isError: editError,
  } = useEditProductTypeMutation(pathname);

  const paramsForm = useFormStorageStore((state) => state.paramsForm);
  const isModal = useFormStorageStore((state) => state.isModal);

  const onFinish = (values: TProductChange) => {
    if (paramsForm)
      editProductType({ ...values, id: paramsForm.id, icon: iconCode, color, bgColor });
    else createProductType({ ...values, icon: iconCode, color, bgColor });
  };

  React.useEffect(() => {
    if (paramsForm) {
      form.setFieldsValue(paramsForm);
      setColor(paramsForm.color);
      setBgColor(paramsForm.bgColor);
      setIconCode(paramsForm.icon);
    }
  }, [paramsForm]);
  React.useEffect(() => {
    if (!isModal) {
      setColor('');
      setBgColor('');
      setIconCode('');
    }
  }, [isModal]);
  return (
    <GlobalModal
      form={form}
      isLoading={editLoading || createLoading}
      isError={editError || createError}
    >
      <Form
        name="Product Types Form"
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
        <Form.Item
          className="w-full"
          name="icons"
          label="Иконки"
          rules={[{ required: false, message: '' }]}
        >
          <Popover
            content={<GlobalIcons iconCode={iconCode} setIconCode={setIconCode} />}
            title="Иконки"
            trigger="click"
          >
            <Button className="w-full">Открыть</Button>
          </Popover>
        </Form.Item>
        <div className="flex items-center gap-2">
          <GlobalIcon
            value={icons.find((icon) => icon.code === iconCode)?.content}
            color={color}
            bgColor={bgColor}
          />
          <br />
          <br />
          <Form.Item name="color" label="Цвет" rules={[{ required: false, message: '' }]}>
            <ColorPicker
              allowClear
              value={color}
              onChange={(value) => setColor(value.toHexString())}
              onClear={() => setColor('')}
            />
          </Form.Item>
          <Form.Item name="bgColor" label="Фон" rules={[{ required: false, message: '' }]}>
            <ColorPicker
              allowClear
              value={bgColor}
              onChange={(value) => setBgColor(value.toHexString())}
              onClear={() => setBgColor('')}
            />
          </Form.Item>
        </div>
      </Form>
    </GlobalModal>
  );
};

export { ProductTypesForm };
