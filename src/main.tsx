// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/react-router';
import { ChatContextProvider } from 'Providers/ChatProvider';
import QueryProvider from 'Providers/QueryProvider';
import StyledProvider from 'Providers/StyledProvider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from 'Routes';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <QueryProvider>
      <StyledProvider>
        <ChatContextProvider>
          <RouterProvider router={router} />
        </ChatContextProvider>
      </StyledProvider>
    </QueryProvider>
  </StrictMode>,
);
