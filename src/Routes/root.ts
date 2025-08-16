import { createRouter } from '@tanstack/react-router';
import { rootRoute, chatRoute, galleryRoute } from 'Routes/routes';

const routeTree = rootRoute.addChildren([chatRoute, galleryRoute]);

export const router = createRouter({ routeTree });
