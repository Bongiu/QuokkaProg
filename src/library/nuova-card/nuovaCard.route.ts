import { Route } from "@angular/router";
import { NuovaCardComponent } from "./nuova-card.component";

export const ROUTES: Route[] =[
    {
        path: '',
        component: NuovaCardComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
]