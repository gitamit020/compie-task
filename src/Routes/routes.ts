import { createRootRoute, createRoute } from '@tanstack/react-router';
import App from '../App';
import GalleryPage from 'Pages/GalleryPage';
import ChatPage from 'Pages/ChatPage';
import { AppRoute } from 'consts';

export const rootRoute = createRootRoute({
  component: App,
});

export const chatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: AppRoute.CHAT_PAGE,
  component: ChatPage,
});

export const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: AppRoute.GALLERY_PAGE,
  component: GalleryPage,
});
