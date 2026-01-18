import { request } from './client';

export type TractorStatus = 'AVAILABLE' | 'MAINTENANCE';

export type Tractor = {
  id: string;
  name: string;
  status: TractorStatus;
};

export const tractorApi = {
  list: () => request<Tractor[]>('/tractors'),

  create: (data: Pick<Tractor, 'name'>) =>
    request<Tractor>('/tractors', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  updateStatus: (id: string, status: TractorStatus) =>
    request<Tractor>(`/tractors/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    }),
};
