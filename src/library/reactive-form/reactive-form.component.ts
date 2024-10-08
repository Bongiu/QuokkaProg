import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


// export interface formReactive{
//   nome:string;
//   mail: string;
//   numero: number;
//   data: Date
// }

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})


export class ReactiveFormComponent {
  // formReactive = FormGroup;

  formReactive! : FormGroup;
  

    nome = new FormControl('');
    mail = new FormControl('');
    // numero = new FormControl('');
    // data = new Date();

    initReactiveForm(){
      this.formReactive = new FormGroup({
        nome : new FormControl('',[Validators.required]),
        mail: new FormControl('',[Validators.required, Validators.email]),
        numero: new FormControl(null,Validators.required),
        data: new FormControl(null, [Validators.required])
      })
    }

    sendForm(){
      if(this.formReactive.valid){
        console.log('il form è valido ',this.formReactive.value);
      }
    }

    ngOnInit(){
      this.initReactiveForm();
    }

    datiReactiveForm = output<any>();

    sendDatiReactiveForm(dat : any){
      this.datiReactiveForm.emit(dat);
    }

}
