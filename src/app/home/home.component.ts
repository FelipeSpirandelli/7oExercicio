import { Component, Inject } from '@angular/core';
import { LogService } from '../services/log.service';
import { APP_CONFIG } from '../app.config';
import { TEST_CONFIG } from '../test.config';

interface AppConfig {
  title: string;
}

@Component({
  selector: 'app-home',
  providers: [{ provide: APP_CONFIG, useValue: TEST_CONFIG }],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  title: string;
  logs: string[] = [];

  constructor(private logService: LogService, @Inject(APP_CONFIG) config: AppConfig) {
    this.title = config.title;
  }

  ngOnInit() {
    this.logs = this.logService.logs; // Obtem os logs do serviço
  }

}
