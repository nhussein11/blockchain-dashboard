import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exchange } from '../models/Exchange';

@Injectable({
  providedIn: 'root'
})

export class ExchangesService {

  private HEADERS = {
    'X-RapidAPI-Key': 'c33b220f40msh763c14260e4d099p173e64jsnc3feb9f93208',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }

  private url : string = 'https://coingecko.p.rapidapi.com/exchanges';

  constructor(private http:HttpClient) { }

  getExchanges(){
    
    return this.http.get<Exchange[]>(this.url,
      {headers: this.HEADERS}
    );
  
  }
  
}
