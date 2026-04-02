import { Routes } from '@angular/router';
import { Details } from './components/details/details';
import { Home } from './components/home/home';

export const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Home details',
  },
];

export default routeConfig;
