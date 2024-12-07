import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchCreateIcon, fetchDeleteIcon, fetchEditIcon, fetchGetIcons } from './icons.services';

const useGetIconsQuery = () =>
  useQuery({
    queryFn: fetchGetIcons,
    queryKey: ['icon'],
    onError: (err: any) => message.error(err.response.data.meta.message),
  });

const useCreateIconMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateIcon,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['icon'] });
      message.success('Create Icon');
    },
    onError: (err: any) => message.error(err.response.data.meta.message),
  });
};

const useEditIconMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditIcon,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['icon'] });
      message.success('Edit Icon');
    },
    onError: (err: any) => message.error(err.response.data.meta.message),
  });
};

const useDeleteIconMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteIcon,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['icon'] });
      message.success('Delete Icon');
    },
    onError: (err: any) => message.error(err.response.data.meta.message),
  });
};

export { useCreateIconMutation, useDeleteIconMutation, useEditIconMutation, useGetIconsQuery };
