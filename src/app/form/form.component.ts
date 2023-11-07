import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  dataForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private http: HttpClient, private logService: LogService) {}

  onSubmit() {
    // Envia os dados para o servidor Node.js
    this.http.post('http://localhost:3000/data', this.dataForm.value).subscribe(response => {
      this.logService.add(`Dados enviados! Nome: ${this.dataForm.value.name} Email: ${this.dataForm.value.email}`);
    });
  }
}
