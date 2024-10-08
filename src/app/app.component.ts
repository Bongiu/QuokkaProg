import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CardComponent } from "../library/card/card.component";
import { InvioDatiOutputCardService } from './core/services/invio-dati-output-card.service';
import { TemplateDrivenFormComponent } from '../library/template-driven-form/template-driven-form.component';
import { log } from 'node:console';
import { ReactiveFormComponent } from '../library/reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, RouterLink, RouterLinkActive,TemplateDrivenFormComponent,ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  titoloFiglioInput = signal<string>('Questo è il titolo passato in input nella card');
  invioOutput = inject(InvioDatiOutputCardService); // import del servizio
  // data : any;

  provaInput = computed(()=>{
    const titoloPadreInput = this.titoloFiglioInput();
    return titoloPadreInput;
  })

  getDatiOutput(e:string){
   console.log(e);
  }

  constructor(){
    this.getDatiOutput;
  }
 // __________invio dati Form___________OUTPUT_____________________

  getDatiForm(f:string[]){
    console.log('output form '+f);
  }

}
