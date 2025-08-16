import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { JSX, PropsWithChildren } from 'react';

type QueryProviderProps = PropsWithChildren;

const QueryProvider = ({ children }: QueryProviderProps): JSX.Element => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
