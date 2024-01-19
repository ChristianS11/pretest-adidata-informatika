import { ChartComponent } from './chart/chart.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'crud',
    loadChildren: () => import('crud/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: ChartComponent,
  },
];
