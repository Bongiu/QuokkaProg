import { Component, inject, input, output } from '@angular/core';
import { InvioDatiOutputCardService } from '../../app/core/services/invio-dati-output-card.service';
import { log } from 'console';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  
  // INPUT -> permette di passare i dati dal componente padre al componente figlio
  titoloCardfiglio = input.required<string>();
  riceviOutput = inject(InvioDatiOutputCardService); // import del servizio


  // OUTPUT -> permette di passare i dati dal componente figlio al componente padre
  outputDati = output<string>();
  // creazione dell'evento custom per il passaggio dei dati

  // setDatiOutput(nuovoNome: string){
  //   this.outputDati.emit(nuovoNome)
  // }
  
  setDatiOutput(){
   this.outputDati.emit('dati inviati dal componente figlio')
  }

  constructor(){

  }
  // methodRiceviDatiOutput(){
  //   const newData = 'dati da behaviorsujct';
  //   this.riceviOutput.methodShowOutput(newData);
  // }

}
