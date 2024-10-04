import { Component, computed, inject, input, output } from '@angular/core';
import { InvioDatiOutputCardService } from '../../app/core/services/invio-dati-output-card.service';
import { DettaglioCardComponent } from './dettaglio-card/dettaglio-card.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DettaglioCardComponent, RouterLink, RouterLinkActive],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  
  // INPUT -> permette di passare i dati dal componente padre al componente figlio
  titoloCardPadre = input<string>("titolo");
  riceviOutput = inject(InvioDatiOutputCardService); // import del servizio

  constructor(){
    this.riceviDatiDettaglio;
  }

  // OUTPUT -> permette di passare i dati dal componente figlio al componente padre
  outputDati = output<string>();
  // creazione dell'evento custom per il passaggio dei dati

  setDatiOutput(){
   this.outputDati.emit('dati inviati dal componente figlio')
  }
  invioDatiInput = input.required<string>();
// - - - - - - - - - - - - - -Ricezione output - - - - - - - - - - - - - - - - - - - - - 

riceviDatiDettaglio(f:string){
console.log(f)
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  
  
 

}
