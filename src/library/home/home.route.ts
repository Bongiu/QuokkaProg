import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";


export const ROUTES: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
]