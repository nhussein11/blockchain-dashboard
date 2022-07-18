import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Exchange } from '../models/Exchange';

@Injectable({
  providedIn: 'root'
})

export class ExchangesService {
  
  private headers = new HttpHeaders()
        .set('X-RapidAPI-Key','c33b220f40msh763c14260e4d099p173e64jsnc3feb9f93208')
        .set('X-RapidAPI-Host','coingecko.p.rapidapi.com');

  private url : string = 'https://coingecko.p.rapidapi.com/exchanges';

  // private url : string = 'https://api.coingecko.com/api/v3/exchanges'; // endpoint without keys
  

  constructor(private http:HttpClient) { }

  getExchanges(perPage:number, page:number){

    let params = new HttpParams()
                        .set('per_page', perPage)
                        .set('page', page)

    let endpoint = `${this.url}`
    
    return this.http.get<Exchange[]>(endpoint,
      {headers: this.headers, params}
    ).pipe(
      map((exchangesResponse:Exchange[])=>{
        return  exchangesResponse
      })
    );
  
  }
  
}
