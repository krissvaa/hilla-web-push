import type { Route } from '@vaadin/router';
import './views/helloworld/hello-world-view';
import './views/main-layout';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // Place routes below (more info https://hilla.dev/docs/routing)
  {
    path: '',
    component: 'hello-world-view',
    icon: '',
    title: '',
  },
  {
    path: 'hello',
    component: 'hello-world-view',
    icon: 'globe-solid',
    title: 'Hello World',
  },
  {
    path: 'about',
    component: 'about-view',
    icon: 'file',
    title: 'About',
    action: async (_context, _command) => {
      await import('./views/about/about-view.js');
      return;
    },
  },
  {
    path: 'notifications',
    component: 'notifications-view',
    title: 'Notifications',
    icon: 'bell',
    action: async (_context, _command) => {
      await import('./views/notifications/notifications-view.js');
      return;
    },
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: views,
  },
];
