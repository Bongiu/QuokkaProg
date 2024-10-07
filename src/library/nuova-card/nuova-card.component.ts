import { Component } from '@angular/core';
import { NuovoDettaglioComponent } from './nuovo-dettaglio/nuovo-dettaglio.component';

@Component({
  selector: 'app-nuova-card',
  standalone: true,
  imports: [NuovoDettaglioComponent],
  templateUrl: './nuova-card.component.html',
  styleUrl: './nuova-card.component.scss'
})
export class NuovaCardComponent {

  // ___________string__________OUTPUT_____________________
  // riceviOutput(r:string){
  //   console.log(r)
  // }

  // __________array___________OUTPUT_____________________
  // riceviArray(f:string[]){
  //   console.log(f);
  // }

    // __________oggetto___________OUTPUT_____________________
    riceviOggetto(d:{}){
      console.log(d)
    }

}
