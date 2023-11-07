import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  logs: string[] = [];

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logs = this.logService.logs; // Obtem os logs do serviço
  }

}
