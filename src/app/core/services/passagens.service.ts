import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DadosBusca, Resultado } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  apiUrl : string = environment.apiUrl;

  precoMin: number = 0;
  precoMax: number = 0;
  constructor(
    private httpClient: HttpClient
  ) { }
  getPassagens(search: DadosBusca) : Observable<Resultado>{
    const params = this.converterParametroParaString(search);

    const obser = this.httpClient.get<Resultado>(this.apiUrl + '/passagem/search?' + params);
    obser.pipe(take(1)).subscribe(
      res => {
        this.precoMin = res.precoMin
        this.precoMax = res.precoMax
      }
    )
    return obser
  }

  converterParametroParaString(busca: DadosBusca){
    const query = Object.entries(busca)
      .map( ([key, value]) => {
        if(!value){
          return ''
        }
        return `${key}=${value}`
      })
      .join('&')
      return query
  }
}
