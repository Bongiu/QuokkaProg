import { Component, output } from '@angular/core';

@Component({
  selector: 'app-nuovo-dettaglio',
  standalone: true,
  imports: [],
  templateUrl: './nuovo-dettaglio.component.html',
  styleUrl: './nuovo-dettaglio.component.scss',
})
export class NuovoDettaglioComponent {
  // ___________string__________OUTPUT_____________________
  // datiINoutput = output<string>();

  // setData(dati:string){
  //   this.datiINoutput.emit(dati);
  // }

  // __________array___________OUTPUT_____________________
  // arrayOutput = output<string[]>();
  // sendArray(arrayDati: string[]) {
  //   this.arrayOutput.emit(arrayDati);
  // }

  // __________oggetto___________OUTPUT_____________________

  oggettoOutput = output<{}>();
  sendOggetto(oggettoDati:{}){
    this.oggettoOutput.emit(oggettoDati);
  }

}
