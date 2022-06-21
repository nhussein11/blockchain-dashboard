import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cryptocurrency } from '../models/Cryptocurrency';
import { CryptocurrencyDetails } from '../models/Cryptocurrency-Details';



@Injectable({
  providedIn: 'root'
})

export class CryptosService {
  
  private HEADERS = {
    //My own key; 
    'X-CMC_PRO_API_KEY': 'b61a8fc1-81dc-4ab2-8fa5-475d5ddf4e08',
    'Accept': 'application/json',
    'Accept-Encoding': 'deflate, gzip',
    'Access-Control-Allow-Origin':'*'
  }

  constructor(private http: HttpClient) { }

  getCryptos():Observable<Cryptocurrency[]>{
    let url = '/v1/cryptocurrency/listings/latest';
    
    return this.http.get<any>(url,
      { headers: this.HEADERS, observe:'response' })
        .pipe(
          map( (resp ) =>  resp.body.data)
        );
  }
  
  getCryptoDetails(id:string):Observable<CryptocurrencyDetails>{
    let url = '/v1/cryptocurrency/info?id='+id;
    
    return this.http.get<any>(url,
        { headers: this.HEADERS, observe:'response' })
        .pipe(
          map( (resp ) => resp.body.data[id])
        );
    }

    
  }
