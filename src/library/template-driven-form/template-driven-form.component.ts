import { Component, output } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { format } from 'path';
import { app } from '../../../server';
import { debuglog } from 'util';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent {
  nome!: string;
  cognome!: string;
  drivenForm = FormGroup;

  getControlName() {
    return;
  }
  sendData(form: NgForm) {
    if (form.valid) {
    return  console.log('valori del form', form.value);
    
    }
  }
  // __________invio dati Form___________OUTPUT_____________________
//  - prendi dati del form
//  - crea evento custom per inviare i dati ad app
//  - ricevi dati su app
//  - mostra i dati su app del form
datiForm = output<string[]>();


sendDatiForm(){
  // alert();
this.datiForm.emit([this.nome,this.cognome]);
}


}
