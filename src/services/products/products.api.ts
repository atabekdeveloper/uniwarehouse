import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchCreateProduct,
  fetchDeleteProduct,
  fetchEditProduct,
  fetchGetProducts,
} from './products.services';

const useGetProductsQuery = (params: TGetParamsChange) =>
  useQuery({
    queryFn: () => fetchGetProducts(params),
    queryKey: ['product', ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.meta.message),
  });

const useCreateProductMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateProduct,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['product'] });
      message.success('Create Product');
    },
    onError: (err: any) => message.error(err.response.data.meta.message),
  });
};

const useEditProductMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditProduct,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['product'] });
      message.success('Edit PRoduct');
    },
    onError: (err: any) => message.error(err.response.data.meta.message),
  });
};

const useDeleteProductMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteProduct,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['product'] });
      message.success(res.meta.message);
    },
    onError: (err: any) => message.error(err.response.data.meta.message),
  });
};

export {
  useCreateProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
  useGetProductsQuery,
};
