import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CardComponent } from "../library/card/card.component";
import e from 'express';
import { InvioDatiOutputCardService } from './core/services/invio-dati-output-card.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProgettoQuokka';

  titoloPadreInput = signal<string>('Questo è il titolo passato in input nella card');
  invioOutput = inject(InvioDatiOutputCardService); // import del servizio
  // data : any;

  provaInput = computed(()=>{
    const titoloPadreInput = this.titoloPadreInput();
    return titoloPadreInput;
  })

  getDatiOutput(e:string){
   console.log(e);
  }

  constructor(){
    this.getDatiOutput;
  }

  // riceviDati(datiRicevuti:any){
  //   this.invioOutput.$datoOutput.subscribe(res =>{
  //     this.data = res;
  //   })
  // }


}
