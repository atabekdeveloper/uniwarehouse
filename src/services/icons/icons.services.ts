import { api } from 'src/api';

import { SR, SRO, TMessage } from 'src/services/index.types';
import { TIconItem } from './icons.types';

export const fetchGetIcons = async (): Promise<SR<TIconItem>> => {
  const res = await api.get('/icons');
  return { data: res.data };
};
export const fetchCreateIcon = async (values: TIconItem): Promise<SRO<TIconItem>> => {
  const res = await api.post('/icons', values);
  return res.data;
};
export const fetchEditIcon = async (values: TIconItem): Promise<SRO<TIconItem>> => {
  const res = await api.put('/icons', values);
  return res.data;
};
export const fetchDeleteIcon = async (id: string): Promise<TMessage> => {
  const res = await api.delete(`/icons/${id}`);
  return res.data;
};
