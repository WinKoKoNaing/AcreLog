import { tractorApi, TractorStatus } from '@repo/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from './query-keys';

/* ---------- Queries ---------- */

export function useTractors() {
  return useQuery({
    queryKey: queryKeys.tractors,
    queryFn: tractorApi.list,
  });
}

/* ---------- Mutations ---------- */

export function useCreateTractor() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: tractorApi.create,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: queryKeys.tractors });
    },
  });
}

export function useUpdateTractorStatus() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (params: { id: string; status: TractorStatus }) =>
      tractorApi.updateStatus(params.id, params.status),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: queryKeys.tractors });
    },
  });
}
