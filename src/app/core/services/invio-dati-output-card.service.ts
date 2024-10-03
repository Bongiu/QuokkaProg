import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvioDatiOutputCardService {

  constructor() { }

  private showOutput = new BehaviorSubject<string | null>(null); //Inizializza con un valore di default
  $datoOutput = this.showOutput.asObservable(); // Rende il soggetto observable

  methodShowOutput(dati : string){
     this.showOutput.next(dati);
   }
}
