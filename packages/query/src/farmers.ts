import { Farmer, farmerApi } from '@repo/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from './query-keys';

/* ---------- Queries ---------- */

export function useFarmers() {
  return useQuery({
    queryKey: queryKeys.farmers,
    queryFn: farmerApi.list,
  });
}

/* ---------- Mutations ---------- */

export function useCreateFarmer() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: farmerApi.create,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: queryKeys.farmers });
    },
  });
}

export function useUpdateFarmer() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (params: { id: string; data: Partial<Farmer> }) =>
      farmerApi.update(params.id, params.data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: queryKeys.farmers });
    },
  });
}

export function useDeleteFarmer() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: farmerApi.remove,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: queryKeys.farmers });
    },
  });
}
