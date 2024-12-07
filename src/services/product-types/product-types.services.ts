import { api } from 'src/api';

import { SR, SRO, TGetParamsChange, TMessage } from 'src/services/index.types';
import { TProductTypeItem } from './product-types.types';

export const fetchGetProductTypes = async (
  params: TGetParamsChange,
  type: string,
): Promise<SR<TProductTypeItem>> => {
  const res = await api.get(`${type}`, {
    params: { limit: 10, page: params.page },
  });
  return { data: res.data };
};
export const fetchCreateProductType = async (
  values: TProductTypeItem,
  type: string,
): Promise<SRO<TProductTypeItem>> => {
  const res = await api.post(`${type}`, values);
  return res.data;
};
export const fetchEditProductType = async (
  values: TProductTypeItem,
  type: string,
): Promise<SRO<TProductTypeItem>> => {
  const res = await api.put(`${type}`, values);
  return res.data;
};
export const fetchDeleteProductType = async (id: string): Promise<TMessage> => {
  const res = await api.delete(`${id}`);
  return res.data;
};
