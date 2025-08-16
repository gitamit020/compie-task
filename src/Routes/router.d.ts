import '@tanstack/react-router';
import { router } from 'Routes/root';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
