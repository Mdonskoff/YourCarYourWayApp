import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'support-chat',
    loadChildren: () => import('./features/support/support.module').then(m => m.SupportModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
  },
];
