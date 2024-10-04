import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-dettaglio-card',
  standalone: true,
  imports: [],
  templateUrl: './dettaglio-card.component.html',
  styleUrl: './dettaglio-card.component.scss'
})
export class DettaglioCardComponent {

// datiInput = signal<string>('titolo passato dal padre');

// - - - - - - - - - - - - - - - OUTPUT- - - - - - - - - - - - - - - - - - - - 
outputDettaglio = output<string>();

setDatiDettaglio(datiDettaglioCard:string){
 
  this.outputDettaglio.emit(datiDettaglioCard);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
constructor(){

}

}
