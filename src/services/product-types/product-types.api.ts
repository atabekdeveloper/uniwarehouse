import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchCreateProductType,
  fetchDeleteProductType,
  fetchEditProductType,
  fetchGetProductTypes,
} from './product-types.services';

const useGetProductTypesQuery = (params: TGetParamsChange, type: string) =>
  useQuery({
    queryFn: () => fetchGetProductTypes(params, type),
    queryKey: [type, ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.meta.message),
  });

const useCreateProductTypeMutation = (type: string) => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (variables: any) => fetchCreateProductType(variables, type),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [type] });
      message.success('Create Product Type');
    },
    onError: (err: any) => message.error(err.response.data.meta.message),
  });
};

const useEditProductTypeMutation = (type: string) => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (variables: any) => fetchEditProductType(variables, type),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [type] });
      message.success('Edit Product Type');
    },
    onError: (err: any) => message.error(err.response.data.meta.message),
  });
};

const useDeleteProductTypeMutation = (type: string) => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteProductType,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: [type] });
      message.success(res.meta.message);
    },
    onError: (err: any) => message.error(err.response.data.meta.message),
  });
};

export {
  useCreateProductTypeMutation,
  useDeleteProductTypeMutation,
  useEditProductTypeMutation,
  useGetProductTypesQuery,
};
