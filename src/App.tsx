import { useMemo, FunctionComponent } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';
import AppProvider from '@components/AppProvider';
import routes from './routes';
import '@styles/globals.css';

export const App: FunctionComponent = () => {
  const queryClient = useMemo(() => new QueryClient(), []);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      <AppProvider />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
