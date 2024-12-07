import { api } from 'src/api';

import { SR, SRO, TGetParamsChange, TMessage } from 'src/services/index.types';
import { TProductChange, TProductItem } from './products.types';

export const fetchGetProducts = async (params: TGetParamsChange): Promise<SR<TProductItem>> => {
  const res = await api.get('/products', {
    params: { limit: 10, page: params.page },
  });
  return { data: res.data };
};
export const fetchCreateProduct = async (values: TProductChange): Promise<SRO<TProductItem>> => {
  const res = await api.post('/products', values);
  return res.data;
};
export const fetchEditProduct = async (values: TProductChange): Promise<SRO<TProductItem>> => {
  const res = await api.put('/products', values);
  return res.data;
};
export const fetchDeleteProduct = async (id: string): Promise<TMessage> => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};
