// packages/query/src/react-query-provider.tsx
'use client';
import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function createReactQueryClient() {
  return new QueryClient();
}

export function ReactQueryProvider({
  children,
  client,
}: {
  children: ReactNode;
  client?: QueryClient;
}) {
  const queryClient = client ?? createReactQueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}