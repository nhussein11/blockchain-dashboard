import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cryptocurrency, CryptoReqRepResponse } from '../models/Cryptocurrency';

@Injectable({
  providedIn: 'root'
})

export class CryptosService {
  
  private HEADERS = {
    //My own key; 
    'X-CMC_PRO_API_KEY': 'b61a8fc1-81dc-4ab2-8fa5-475d5ddf4e08',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin':'*'
  }

  constructor(private http: HttpClient) { }

  getCryptos():Observable<CryptoReqRepResponse>{
    let url = '/v1/cryptocurrency/listings/latest';
    
    return this.http.get<CryptoReqRepResponse>(url,
        { headers: this.HEADERS }
      ).pipe(
        map( resp =>{
          return resp
        }
        )
      )
      
      ;
  }
  
  getCryptoDetails(id:string):Observable<Cryptocurrency[]>{
    let url = '/v1/cryptocurrency/info?id='+id.toString();
    
    return this.http.get<any>(url,
        { headers: this.HEADERS }
      );
  }
  

}
