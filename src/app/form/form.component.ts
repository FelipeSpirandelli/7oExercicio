import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  dataForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Envia os dados para o servidor Node.js
    this.http.post('http://localhost:3000/data', this.dataForm.value).subscribe(response => {
      console.log('Dados enviados com sucesso', response);
    });
  }
}
