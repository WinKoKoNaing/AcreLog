import { request } from './client';

export type WorkType = {
  id: string;
  name: string;
};

export const workTypeApi = {
  list: () => request<WorkType[]>('/work-types'),

  create: (name: string) =>
    request<WorkType>('/work-types', {
      method: 'POST',
      body: JSON.stringify({ name }),
    }),
};
