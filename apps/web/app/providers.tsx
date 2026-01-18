'use client';

import { createReactQueryClient, ReactQueryProvider } from '@repo/query';
import { ReactNode } from 'react';
const queryClient = createReactQueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactQueryProvider client={queryClient}>{children}</ReactQueryProvider>
  );
}
