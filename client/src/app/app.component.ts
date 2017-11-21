import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _apiService: ApiService) {
    this._apiService.getAccountCode().subscribe(result => this.msg = result);
  }

  msg = '';
}
