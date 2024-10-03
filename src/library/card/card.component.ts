import { Component, input, output } from '@angular/core';

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

  // OUTPUT -> permette di passare i dati dal componente figlio al componente padre
  outputDati = output<string>();
  // creazione dell'evento custom per il passaggio dei dati

  // setDatiOutput(nuovoNome: string){
  //   this.outputDati.emit(nuovoNome)
  // }
  
  setDatiOutput(){
    this.outputDati.emit('dati inviati dal componente figlio')
  }

}
