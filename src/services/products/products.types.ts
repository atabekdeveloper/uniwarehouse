import { TProductTypeItem } from '../product-types/product-types.types';

export type TProductItem = {
  id: number;
  name: string;
  nameUz: string;
  nameUk: string;
  nameRu: string;
  nameEn: string;
  amount: number;
  price: number;
  tinCode: string;
  unit: TProductTypeItem;
  quality: TProductTypeItem;
  type: TProductTypeItem;
  status: TProductTypeItem;
};
export type TProductChange = {
  id: number;
  nameUz: string;
  nameUk: string;
  nameRu: string;
  nameEn: string;
  amount: number;
  price: number;
  tinCode: string;
  unitId: number;
  qualityId: number;
  productTypesId: number;
};
