import { Route } from "@angular/router";
import { CardComponent } from "./card.component";
import { DettaglioCardComponent } from "./dettaglio-card/dettaglio-card.component";


export const ROUTES: Route[] = [
    {
        path: '',
        component: CardComponent
    },
    // {
    //     path: 'dettaglioCard',
    //     component: DettaglioCardComponent
    // },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
]