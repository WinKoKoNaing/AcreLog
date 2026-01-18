import { workTypeApi } from '@repo/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from './query-keys';

/* ---------- Queries ---------- */

export function useWorkTypes() {
  return useQuery({
    queryKey: queryKeys.workTypes,
    queryFn: workTypeApi.list,
  });
}

/* ---------- Mutations ---------- */

export function useCreateWorkType() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: workTypeApi.create,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: queryKeys.workTypes });
    },
  });
}
