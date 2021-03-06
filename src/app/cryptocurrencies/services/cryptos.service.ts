import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { LocalService } from 'src/app/services/local.service';
import { Cryptocurrency, CryptocurrencyDetailsGraphic } from '../models/Cryptocurrency';
import { CryptocurrencyDetails } from '../models/Cryptocurrency-Details';




@Injectable({
  providedIn: 'root'
})

export class CryptosService {

  private headers = new HttpHeaders()
    .set('X-CMC_PRO_API_KEY', 'b61a8fc1-81dc-4ab2-8fa5-475d5ddf4e08')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  private url = '/v1/cryptocurrency';

  constructor(private http: HttpClient, private _localService: LocalService) { }

  getCryptos(start: number, limit: number): Observable<Cryptocurrency[]> {
    let params = new HttpParams().set('start', start)
      .set('limit', limit);

    let endpoint = `${this.url}/listings/latest`;

    return this.http.get<any>(endpoint,
      { headers: this.headers, responseType: 'json', observe: 'response', params })
      .pipe(
        map((resp) => {

          (resp.body.data).forEach((crypto: Cryptocurrency) => {
          
            if (this.getCryptoFav(crypto.id.toString())) {
              crypto.is_favorite = true;
            }

          });

          return resp.body.data
        })
      );
  }

  getCryptoDetails(id: string): Observable<CryptocurrencyDetails> {

    let params = new HttpParams().set('id', id);

    let endpoint = `${this.url}/info`;

    return this.http.get<any>(endpoint,
      { headers: this.headers, observe: 'response', params })
      .pipe(
        map(({ body: { data } }) => data[id])
      );
  }

  getCryptoDetailsGraphic(id: string): Observable<number[]> {

    let params = new HttpParams().set('id', id);

    let endpoint = `${this.url}/quotes/latest`;

    let cryptoPercetages: number[] = [];

    return this.http.get<any>(endpoint,
      { headers: this.headers, observe: 'response', params })
      .pipe(
        map(({ body: { data } }) => {
          let {
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
            percent_change_30d,
            percent_change_60d,
            percent_change_90d } = data[id].quote.USD;

          cryptoPercetages.push(
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
            percent_change_30d,
            percent_change_60d,
            percent_change_90d);

          return cryptoPercetages;
        })
      );
  }

  getCryptoFav(id: string) {
    return this._localService.getData('cryptoFavs - ' + id);
  }
}