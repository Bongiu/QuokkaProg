import { Routes } from '@angular/router';
import { HomeComponent } from '../library/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
    {path: 'card', loadChildren:()=>import('../library/card/card.route').then(m=>m.ROUTES)},
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
];
