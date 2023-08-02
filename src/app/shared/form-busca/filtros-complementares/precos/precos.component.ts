import { Component } from '@angular/core';

@Component({
  selector: 'app-precos',
  templateUrl: './precos.component.html',
  styleUrls: ['./precos.component.scss']
})
export class PrecosComponent {
  precoMin?: number = 0;
  precoMax?: number = 5000
}
