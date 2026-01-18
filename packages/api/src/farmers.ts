import { request } from './client';

export type Farmer = {
  id: string;
  name: string;
  phone?: string;
};

export const farmerApi = {
  list: () => request<Farmer[]>('/farmers'),

  create: (data: Pick<Farmer, 'name' | 'phone'>) =>
    request<Farmer>('/farmers', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  update: (id: string, data: Partial<Farmer>) =>
    request<Farmer>(`/farmers/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),

  remove: (id: string) =>
    request<void>(`/farmers/${id}`, {
      method: 'DELETE',
    }),
};
