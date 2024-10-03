import { Route } from "@angular/router";
import { CardComponent } from "./card.component";


export const ROUTES: Route[] = [
    {
        path: '',
        component: CardComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
]